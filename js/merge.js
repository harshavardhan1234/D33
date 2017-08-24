let fs = require('fs');
// creating user defined ReadAppend function
function ReadAppend(file, appendFile) {
fs.readFile(appendFile, function(err, data) {
    if (err) {
       throw err;
     }
       fs.appendFile(file, data, function(er) {
        if (er) {
        throw er;
        }
        });
     });
}
// Declaring required csv fies for merging

        let file = './inputdata/India2011.csv';
        let appendFile = './inputdata/IndiaSC2011.csv';
        let file3 = './inputdata/IndiaST2011.csv';
        let out = './inputdata/Indiamerge2.csv';
        // calling the ReadAppend function
         ReadAppend(out, file);
         ReadAppend(out, appendFile);
         ReadAppend(out, file3);
         // exporting the function for merge
module.exports = ReadAppend;
