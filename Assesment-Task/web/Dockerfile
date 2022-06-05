FROM node:14

WORKDIR /app
ADD ./package.json /app
ADD ./package-lock.json /aap
RUN npm install 
ADD . /app
RUN npm test
EXPOSE 5000

CMD ["npm","start"]

