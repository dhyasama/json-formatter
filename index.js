"use strict";

var fs = require('fs');
var args = process.argv.slice(2);
var src = args[0];
var dest = args[1] || 'output.json';

fs.readFile(src, 'utf-8', function(err, data) {

  if (err) return console.error(err);

  var json;

  try {
    json = JSON.parse(data);
  }
  catch (err) {
    return console.error(err);
  }

  fs.writeFile(dest, JSON.stringify(json, null, 2), function(err){
    if (err) return console.error(err);
    else console.log('DONE - Wrote to ' + dest);
  });

});
