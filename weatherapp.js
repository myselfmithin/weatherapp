// var request=require('request');
const yargs=require('yargs');

const geocode=require('./geocode.js');

const geo=require('./geo.js');



//for command line arguments

let argv=yargs
.options({
    a:{
        demand:true,
        alias:'address',
        describe:'address to fetch whether for',
        string:true

    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
  if(errorMessage){
      console.log(errorMessage);
  }
  else {
      console.log(results.address);
      geo.getweather(results.lattitude,results.longitude,(errorMessage,weatherresults)=>{
        if(errorMessage){
            console.log(errorMessage);
        }
        else {
            console.log(`currently the temperature :${weatherresults.temperature}`);
            console.log(` and apparent temperature is :${weatherresults.apparentTemp}`);
        }
      });
  
  }
});

 
// geo.getweather(11.0265378,77.1312586,(errorMessage,weatherresults)=>{
//       if(errorMessage){
//           console.log(errorMessage);
//       }
//       else {
//           console.log(JSON.stringify(weatherresults,undefined,2));
//       }
//     });
