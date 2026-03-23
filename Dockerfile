FROM node:22.12.0-slim AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --force
COPY . .
RUN pnpm run build
FROM caddy:2.8-alpine
COPY --from=build /app/dist /usr/share/caddy
EXPOSE 80

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]