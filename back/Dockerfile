FROM node:14.15-alpine

WORKDIR /usr/src/app

# Setup node
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Installing packages
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Folders
COPY ts*.json ./
COPY .babelrc ./
COPY dist ./dist
COPY public ./public
COPY src ./src

# Envs
ENV APP_NAME rpa
ENV DEBUG rpa:*
ENV MONGO_URI mongodb://mongo/rpa
ENV NODE_PATH ./src
ENV PORT 4000

# Port to expose
EXPOSE $PORT

ENTRYPOINT ["yarn", "run"]
CMD "start"
