
# Api MVC Shop

[![NodeJs](https://img.shields.io/badge/code-NodeJs-brightgreen.svg)](https://nodejs.org/en/)
[![Javascript](https://img.shields.io/badge/code-JavaScript-blue.svg)]()
[![MongoDB](https://img.shields.io/badge/db-MongoDB-red.svg)](https://www.mongodb.com/)

This program is a REST API that allows clients to add products and make orders in a NoSQL database. The database is hosted in MongoDB Atlas (Cloud) on a AWS server.
This API is using the express architecture.
Clients can access the API with a token system by using the jsonwebtoken (JWT) npm module. 

[Postman program](https://www.getpostman.com/) have been used for for the client part tests (routes). 


## Getting Started


### Prerequisites

1) First, you must create an account on the [mongoDB atlas website](https://www.mongodb.com/cloud/atlas), and then create a cluster. Once created, you can now get the connection information from your cluster by clicking the "connect" button, choose the "Connect your Application" option and copy your "Connection String Only".

2) Installing node.js

- Mac (homebrew): 
```
brew install node
```

- Linux (packet manager):
```
sudo apt-get install nodejs npm
```

- Node website:
```
https://nodejs.org/
```



### Installing

3) Clone the repository project in the directory of your choice with:

```
git clone https://github.com/vreymond/api-mvc-shop
```

4)  Move to the project directory, and install all npm modules dependencies needed by the program

```
npm install
```

5) Create a .env file in the root of the directory with the following variable:

```
PORT=<your api port>
DB_CONNECT="<paste you connection string only mongoDB here"
JWT_KEY="<Json Web Token secret string to generate encoded tokens>"

// DB_CONNECT is like: 
// "mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?       retryWrites=true&w=majority

```



## Program launch

- Start your cluster on mongoDB atlas
 
- Configure your .env file (Api port, mongoDb string connection, and your jsonwebtoken secreft key).

- Start the API:

```
npm start
```

## API usage

All the routes have been tested using the [Postman program](https://www.getpostman.com/).

### 1°) API index

You can access the API by using the URL ```http://localhost:<portAPI>/``` (default port is 3000).

### 2°) API Login check route

TO COMPLETE



# Contributors

> Valentin Reymond

<a href="https://github.com/vreymond/api-mvc-shop" target="_blank">**Api MVC shop**</a> 

[<img alt="vreymond" src="https://avatars2.githubusercontent.com/u/25683049?s=460&v=4" width="150">](https://github.com/vreymond) 

<a href="https://github.com/vreymond" target="_blank">`github.com/vreymond`</a>


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


