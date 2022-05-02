const ExplorerController =require('./controllers/ExplorerController');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (request, response) =>  {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
})