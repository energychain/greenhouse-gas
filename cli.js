#!/usr/bin/env node

const ghg = require('./src/GreenhouseGas');

const cliapp = async function(kwh,options,co2eq) {
  console.log(ghg.calculateEquivalency(kwh,options,co2eq/1000000));
}

if(process.argv.length > 2) {
  cliapp(0,{},process.argv[2]*1);
} else {
  console.log("Note: You might give co2eg in grams as parameter");
  cliapp(1);
}
