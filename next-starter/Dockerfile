FROM node:14

RUN yarn --version

RUN mkdir -p /src/

WORKDIR /src/

COPY yarn.lock /src/

COPY package.json /src/

RUN yarn

COPY . /src/

EXPOSE 3000

CMD [ "yarn", "dev" ]