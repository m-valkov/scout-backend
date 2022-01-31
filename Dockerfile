FROM node:17-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build && npm run post-build

FROM node:17-alpine as stage
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./
EXPOSE 80
HEALTHCHECK  --interval=30s --timeout=10s \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1
CMD ["npm", "run","stage"]

FROM node:17-alpine as prod
WORKDIR /usr/src/app
ENV NODE_ENV="production"
COPY --from=builder /usr/src/app/dist ./
RUN npm install -g pm2
EXPOSE 80
HEALTHCHECK  --interval=30s --timeout=10s \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1
CMD ["pm2-runtime","index.js"]