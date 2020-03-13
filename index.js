const express = require('express');
const server = express();
const dbRouter = require('./api/dbRouter')




// server.use(helmet())
server.use(express.json())
// server.use(logger)
server.use('/api', dbRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
  });

//   function logger(req, res, next) {

//     const method = req.method;
//     const endpoint=req.originalUrl;
//     console.log(`${method} to ${endpoint}`);
//     next(); 
   
//    }
   
port = process.env.PORT || 5000;
server.listen(port, ()=>console.log(`Server Running on ${port}`))