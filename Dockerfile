# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN apk add python3
# && apk add python3-venv && apk add libaugeas0
RUN python3 -m venv /opt/certbot/
RUN /opt/certbot/bin/pip install --upgrade pip
RUN /opt/certbot/bin/pip install certbot certbot-nginx
RUN ln -s /opt/certbot/bin/certbot /usr/bin/certbot
#COPY nginx.conf /etc/nginx/conf.d/docker2bellias.ddns.net.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
