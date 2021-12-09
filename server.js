const express = require("express");

const app = express();
const cors = require('cors')


const corsOptions = {
    origin: 'https://sad-euclid-ca5ec7.netlify.app/'
  }
app.options('*', cors(corsOptions)) 




const dotenv = require("dotenv")

dotenv.config()




const dbConfig = require('./db')
app.use(express.json())
// import the rooms route
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')



// access for the rooms route- to go and check the endpoints in rooms route- to fecth the rooms in database
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)



const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`yayay Server running on port ${port}`));
