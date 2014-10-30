var http = require("http");

var if_crashed = function(url, cb) {
  http.get(url, function(res) {
    var data = '';
    res.setEncoding('utf-8');
    res.on('data', function(chunk) {
      data += chunk;
    });
    res.on('end', function() {
      if(/Your app is crashing./.test(data))
        cb();
    });
  }).on('error', function(err) {
    console.log("Error occurred while connecting to ",url);
    console.log(err.message);
  });
};

module.exports.if_crashed = if_crashed;