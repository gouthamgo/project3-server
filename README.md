# Hotel booking App- Mern Stack

# Mern-stack-app-Building

# Project Setup

# Frontend- Client

```
1. npx-create-react-app client
2. npm i axios
3. npm i react bootstrap
4. npm i react-spinners


```

- default port -3000
 - use -> npm start to run the application

# Navbar

- Used bootstrap cdn -4.5 
- Used Nav component of bootstrap 

# Backend - Server 

- Node.js Environment

```
1. npm init -y 
2. npm i express --> for backend
3. npm i nodemon---> start server automatically------> use nodemon server to run the backend locally
4. npm i mongoose
5. npm i router
6. npm i antd
7. npm i moment



```

## Entry point for the application 

- Create Express Server
- 
### Required express 

```
//=============================
//      Dependencies
//=============================
const express = require("express");

```
```
//=============================
//  Environment Variable
//=============================
const app = express();

const PORT = process.env.PORT || 5000;
```


# Database

- Connect using mongoose to the nodejs

```
const mongoose = require("mongoose");

var mongoURL = process.env.MONGOLAB_URI;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});
# url and safety parameters

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB connection failed');
})

connection.on('connected', ()=>{
    console.log('Mongo DB connection worked');
})


module.exports = mongoose


```

``
use dotenv file  to protect data 

``


# Process 2

## we can think to get the available rooms data to the home screen 

- Create a model for the room 
---> make a schema for all the available fields that need to be there in the mongodb 

```
const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name: {
        type:String,
        required: true
    },
    maxcount : {
        type:Number,
        required: true

    },

    phonenumber: {
        type:Number,
        required: true
    },

    rentperday: {
        type:Number,
        required: true
    },
    imageurls:[],
    currentbookings: [],
    type:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    }
},{
    timestamps: true,
    collection: 'rooms',
})

// making a model - collection name and schema  
const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel

```

- I took static data in the Json format to work with them in the application
--> it created a unique id for every data 

# Express Router --> for Routes

- create a route for the rooms 
- To the endpoints of the rooms 

```
If you use the async keyword before a function definition, you can then use await within the function. When you await a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.


try_statements
The statements to be executed.

catch_statements
Statement that is executed if an exception is thrown in the try-block.
```
```
router.get("/getallrooms", async (req, res) => {
   
     try {
          const rooms = await Room.find({}) // pass an empty object
          // to get all the rooms
          console.log(rooms);
     res.send(rooms)
     // return res.json({rooms});
     } catch (error) {
          return res.status(400).json({ message: 'something went wrong' });
     }

});
```

** Learnt to use the POSTMAN to check the requests by passing through various requests 

--> lets through the rooms to the front end side 

```
proxy in package.json ---> since backend is present in other port 
proxy---> "domain of the nodej server "
```

```
An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);
```
*** idea would be 
- get the data through api from backend
- then return the rooms through mapping each room 
- make a room component and send room prop  as the object 
- get all the details that need to be shown
***

- for modal pop-up 
- I used react bootstrap model ---> predefined
- I also used react bootstrap carousel to get the popup function with images working 



## booking screen

```
IDEA
- when someone clicks on book now button ---> it routes to the booking page
- It is routed using the booking id from the mongodb
- pass the room id in the url
```

# Home screen
- I used Antd desgin for the dates selection 
- momentjs for the dates 

https://ant.design/components/date-picker/
https://momentjs.com/


