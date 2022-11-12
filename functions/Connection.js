//Import Statements
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

//Reading Environment Variables
const MONGO_URI_AZR = process.env.MONGO_URI_AZR

//Mongo DB Connection Method
const Connection = async () => {
    mongoose.connect(MONGO_URI_AZR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log('Mongo DB Connected')
    })

    mongoose.connection.on('error', (err) => {
        console.log('Mongo DB Connection Error', err)
    })
}

//Export Statement
module.exports = Connection