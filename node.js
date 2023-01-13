const http = require('http');
const port = 6400;
const data = {
    Name:'Akash',
    MiddleName: 'Kumar',
    LastName:'Biswas',
    Age:25,
    city:'Kolkata'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req , res) => {
    res.write(`<h1> Happy to see u again </h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})