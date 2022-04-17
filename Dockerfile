# specify the node base image with your desired version node:<version>
FROM node:14
# replace this with your application's default port
EXPOSE 7776

COPY . /home/node/app
RUN chown -fR node:node /home/node/app
USER node
WORKDIR /home/node/app
RUN yarn && yarn build

CMD ["yarn","start"]
