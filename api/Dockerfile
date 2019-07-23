# Use an official node runtime as a parent image
FROM node:9

# Set the working directory to /home/app
WORKDIR /home/app/

# Bundle app source
COPY . /home/app/

# If you are building your code for production
RUN npm install --silent

# Set environment to "development" by default
ENV NODE_ENV development

# Make port 8000 available to the world outside this container
EXPOSE 8000

CMD npm run start
