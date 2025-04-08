FROM node:18-alpine

WORKDIR /workspace
COPY package*.json ./
RUN npm install --only=production
COPY . .

ENV NODE_ENV=production
ENV PORT=8080

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node healthcheck.js || exit 1

CMD ["node", "server.js"]