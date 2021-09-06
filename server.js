'use strict';

let express = require('express');


let weatherData = require('./data/weather.json');





let server = express();



let PORT = 3020;




// http://localhost:3020/city?foundData=Seattle

server.get('/city',(req,res) =>{
    let foundData = req.query.foundData;
    let result = weatherData.map((item)=>{
        // if(item.city_name === foundData)
       
        return item.data.ozone;
    })

    // let result2 = result.find((item)=>{
    //     if(item.city_name === foundData)
    //     return item;
    // })

   res.send(result);
})






server.listen(PORT,()=>{
    console.log(`this is my ${PORT}`);
})