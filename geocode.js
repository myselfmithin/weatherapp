var request=require('request');




geocodeAddress=function(address,callback){
    let encodedAddress=encodeURIComponent(address);

// making http requests
//here body is , the data we are going to get back when url requests the google api 

request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}` ,
    json:true
},(error,response,body)=>{
    if(error){
        callback('unable to connect google servers');
    }
    else if(body.status=='ZERO_RESULTS'){
        callback('unable to find the address');
    }
    else if(body.status=='OK'){
        callback(undefined, {
            Address: body.results[0].formatted_address,
            lattitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng


        });
    }
});
  
}

module.exports={
    geocodeAddress
}