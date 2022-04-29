# MERN Stack Shoping Cart (Backend)


## Lists oF API
CART API
- /api/addtocart  - POST add to cart
- /api/cart  - GET Cart Details
- /api/removeItem - POST Remove Item From The cart

Product API
- /api/product  - POST save product
- /api/products - GET Fetch All Products
- /api/product/:id - GET Fetch Particular Product




## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd backend
npm i
cd src
node server.js
```

For production environments...
create .env file
```sh
npm install --production
MONGO_URL="ENTER_YOUR_MONGODB_URL"
```
For set Deafult user in DB
```
cd backend
cd src
node setuser.js
```

For import Dummy Data
```
cd backend
cd src
node importdummydata.js
```

