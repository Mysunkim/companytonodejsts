var fs = require('fs');

fs.rename('mynewfile1.txt','myRenamedfile.txt',function(err){
    if(err) throw err;
    console.log('File Renamed!!');
});