'use strict';
require('dotenv').config();
let express = require('express');
let cors = require('cors');
let weatherData = require('./data/weather.json');





let server = express();
server.use(cors());



let PORT = process.env.PORT;




// http://localhost:3020/city?foundData=Seattle

server.get('/city',(req,res) =>{
    let dataArr=[];
    let foundData = req.query.foundData;
    let result = weatherData.map((item)=>{
        // if(item.city_name === foundData)
       
        return item;
    })

    let result2 = result.find((item)=>{
        if(item.city_name === foundData)
        dataArr.push(item.lat,item.lon)
        return item;
    })

    let result3 = result2.data.map((item) => {
        let arr=[];
        arr.push(item.weather.description,item.valid_date);
        // dataArr.push(item.weather.description,item.valid_date);
        return arr;
    })

console.log(dataArr);

   res.send(dataArr+result3);
})




server.get('*',(req,res)=>{
    res.status(404).send('Sorry, page not found');
})

server.listen(PORT,()=>{
    console.log(`this is my ${PORT}`);
})



// http://localhost:3020/city?foundData=Seattle

// server.get('/city',(req,res) =>{
//     let foundData = req.query.foundData;
//     let result = weatherData.map((item)=>{
//         // if(item.city_name === foundData)
       
//         return item;
//     })

//     let result2 = result.find((item)=>{
//         if(item.city_name === foundData)
//         return item;
//     })

//    res.send(result2);
// })


 