FROM node:20-slim AS base

FROM base AS deps
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN rm -rf .next

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /home/nextjs/.npm/_logs && chown -R nextjs:nodejs /home/nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

# Railway will set PORT dynamically (usually 8080)
EXPOSE 8080

ENV HOSTNAME="0.0.0.0"

# Run Next.js directly (not via npm) for proper signal handling
CMD ["node", "node_modules/next/dist/bin/next", "start"] 