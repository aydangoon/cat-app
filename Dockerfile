FROM node:7.7-alpine

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps & make dir
RUN mkdir -p /opt/cat-app && cp -a /tmp/node_modules /opt/cat-app
WORKDIR /opt/cat-app
COPY . /opt/cat-app

# run
EXPOSE 3000
CMD ["npm", "start"]