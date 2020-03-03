const express = require('express');
app = express();

const version = 1;

app.get('/', function (req, res) {

    var response = 'This is version ' + version + ' of the app.</h2>' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/html', function (req, res) {

  var response = '<h2>This is version <b style="color: red;">' + version + '</b> of the app.</h2>' + '\n';

  //send the response to the client
  res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
