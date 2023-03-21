# syntax=docker/dockerfile:1
#CMD run when container run, RUN run when during container building

FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app

#specify a folder contains app in docker environment
#Any RUN, CMD, ADD, COPY, or ENTRYPOINT command will be executed in the specified working directory.
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build

#chỉ định port cho người sử dụng dockerimage này biết port app đang chạy.
#Chứ không phải để expose 1 cái port default của docker image nay.
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]

