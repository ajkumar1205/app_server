FROM ubuntu:latest

RUN apt-get update && apt install curl && apt-get update

RUN curl -fsSL https://bun.sh/install | bash
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash && \
    source ~/.bashrc && nvm install node

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .

RUN bun run generate
RUN bun run migrate

# COPY public public

ENV NODE_ENV production
CMD ["bun", "src/index.ts"]

EXPOSE 3000