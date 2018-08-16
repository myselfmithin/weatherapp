const request=require('request');


var getweather=(lat,lng,callback)=>{

    request({url:`https://api.darksky.net/forecast/5145904179f2f2788bdb823ec48fec3a/${lat},${lng}`,
         json:true
           
      },(error,response,body)=>{
          if(!error&&response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemp:body.currently.apparentTemperature
            });    
      }
       else{
        callback('unable to fetch weather report');
      }
      });
    
    };

    
module.exports.getweather=getweather;