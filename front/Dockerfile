FROM node:lts-alpine3.11

WORKDIR /app

# Packages
# COPY ./packages packages
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Folders
COPY babel.config.js ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src

# Envs
ENV HOST 0.0.0.0

# nginx
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/.htpasswd /etc/nginx/conf.d/.htpasswd
# COPY --from=0 /code/projects/frontend/build /usr/share/nginx/html/

# Port to expose
EXPOSE 8080

ENTRYPOINT ["yarn", "run"]
CMD "build"
