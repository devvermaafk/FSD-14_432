import http from "http";

const server = http.createServer((req, res)=>{
    console.log("welcome to serverside");
});

const PORT = 4444;

server.listen(PORT, () => console.log(`Server is running...`));