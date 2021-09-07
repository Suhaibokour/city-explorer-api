'use strict';
require('dotenv').config();
let express = require('express');
let cors = require('cors');
let weatherData = require('./data/weather.json');

let PORT = process.env.PORT;
let server = express();
server.use(cors());


class Forecast{
    constructor(date,description){
        this.date =date;
        this.description = description;
      }

}

// https://city-explorer-api-suhaib.herokuapp.com/?foundData=Paris
// http://localhost:3020/?foundData=Seattle
server.get('/',(req,res)=>{
    let foundData = req.query.foundData;
    let result = weatherData.find(item=>{
        if(item.city_name === foundData){
            return item;
        }
        
    });
    try{
        let result2=result.data.map(item=>{
            let date = item.valid_date;
            let description = item.weather.description;
            return new Forecast(date,description);
        });
        res.send(result2)
    }
    catch(error){
        res.send("Sorry, page not found")
    }
});


server.get('*',(req,res)=>{
    res.status(404).send('Sorry, page not found');
})

server.listen(PORT,()=>{
    console.log(`this is my ${PORT}`);
})




// http://localhost:3020/city?foundData=Seattle

// server.get('/',(req,res) =>{
//     let dataArr=[];
//     let foundData = req.query.foundData;
//     let result = weatherData.map((item)=>{
        // if(item.city_name === foundData)
       
    //     return item;
    // })

    // let result2 = result.find((item)=>{
    //     if(item.city_name === foundData)
    //     dataArr.push(item.lat,item.lon)
    //     return item;
    // })

    // let result3 = result2.data.map((item) => {
    //     // let arr=[];
        // arr.push(item.weather.description,item.valid_date);
        // dataArr.push(item.weather.description,item.valid_date);
        // return arr;
//         return item;
//     })

// console.log(result3);

//    res.send(result3);
// })







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


 