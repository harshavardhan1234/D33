// Declaring required variables
const readline = require('readline');
const fs = require('fs');
let tempData = {};
let totalmen = 0;
let totalwomen = 0;
let encoding = 'utf8';
let radix;
// Creating convet function to convert csv files to json
let convert = function(dat) {
 if(isNaN(dat)) {
         throw new Error('Not a number');
     }
     const rl = readline.createInterface({
    input: fs.createReadStream('./inputdata/Indiamerge.csv')
});
// selecting requird lines
rl.on('line', function(line) {
    let line1 = line.split(',');
	if(!isNaN(line1[7]) && !isNaN(line1[8]))
    {
    // adding total values of line
        totalmen = totalmen + parseInt(line1[7], radix);
        totalwomen = totalmen + parseInt(line1[8], radix);
    }
    // storing data in array
    tempData['States'] = 'All';
    tempData['Total men'] = totalmen;
    tempData['Total women'] = totalwomen;
});

//  console.log(tempData);

// coverting to json from csv merge file
rl.on('close', function() {
    let jsonData = JSON.stringify(tempData);
    fs.writeFileSync('./outputdata/IndiaCensusStructureharsha.json', jsonData, encoding);
});

//  console.log('CSV to Json Converted');
return 'JSON written successfully';
};

module.exports = convert;
