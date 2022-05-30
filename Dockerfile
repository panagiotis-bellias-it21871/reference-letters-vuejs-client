# build stage
FROM node:14.17.1-alpine3.13 as build-stage
WORKDIR /app
COPY Reference-Letters-Client/package*.json ./
RUN npm install
COPY Reference-Letters-Client/. .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY Reference-Letters-Client/nginx.conf /etc/nginx/nginx.conf
#RUN rm /etc/nginx/conf.d/default.conf
#COPY Reference-Letters-Client/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
