const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.dbserver);
mongoose.connection.once('open', () => {
    console.log("Connection open");
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for request on port 4000s');
    console.log(graphqlHTTP)
});

// 3-5 7 14 17