const express = require('express');
const expressGraphQL = require ('express-graphql');
const schema = require ('./schema.js'); //same directory
const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Server jalan di port 4000');
});