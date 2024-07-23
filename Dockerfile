FROM --platform=linux/x86-64 node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# install simple http server for serving static content
RUN npm install -g http-server

# copy dist folder to working directory
COPY /dist . 

EXPOSE 8080
CMD [ "http-server" ]