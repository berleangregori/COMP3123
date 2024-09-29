const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/hello', (req, res) =>{
    res.send('Hello Express JS')
}) 

app.get('/user', (req, res) => {

    const { firstname = 'Pritesh', lastname = 'Patel' } = req.query;
    
    const response = {
        firstname,
        lastname
    };

    res.json(response);
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;

    const response = {
        firstname,
        lastname
    };

    res.json(response);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})