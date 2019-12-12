# Dockerfile for Nodejs Webapp

Created a web service using Dockerfile which is required to make your Nodejs web app run inside a Docker container.

The Dockerfile:

```dockerfile
# we will use the latest version of node available from the Docker Hub.
FROM node:latest

# Created app directory
WORKDIR /usr/src/app

# Installed app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Installed the packages while the image is building
RUN npm install

# Bundle app source, i.e. copying all your required files for the app
# Note: files & folders inside .dockerignore will not be copied.
COPY . .

# Exposing port 3000 to be used by the docker network
EXPOSE 3000

# Runtime command to be executed when the container is launched
CMD ["node", "app.js"]
```

### Running the nodejs app on your machine and showing it from a docker container: 


1) Create a directory in node.js the repo

```
mkdir nodejs_dockerfile
```

2) Build the docker image

```
docker build -t image-name .
```

3) Run the docker container from the image

```
docker run -d -p 3000:3000 image-name
```
### JSON file based database:
```
{
    "customer1" : {
       "name" : "Brad",
       "dessert" : "Choco Vanilla Shake",
       "price" : "price1",
       "addons": {
          "1":"With low Calorie sugar",
          "2":"with toppings and cream",
          "3":"with cream only"

       },  
       
       "id": 1
    },
    
    "customer2" : {
       "name" : "Gaby",
       "dessert" : "Red Velvet muffin shake",
       "price" : "price3",
       "id": 2
    },
    
    "customer3" : {
       "name" : "Eli",
       "password" : "Blueberry Chesse Shake",
       "price" : "price3",
       "id": 3
    }
 }
```
