var express = require('express');
var app = express();
var twilio = require('twilio');

// Create a new REST API client to make authenticated requests against the
// twilio back end
var client = new twilio.RestClient(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
 
// config
app.set('port', (process.env.PORT || 5000));

// routes
app.get('/', function(request, response) {
  response.sendFile(res.sendFile(path.join(__dirname, 'views', 'index.xml')););
  
  client.sms.messages.create({
    to: '+' + process.env.PHONE_NUMBER,
    from: process.env.TWILIO_NUMBER,
    body: 'Ahoy! A guest was just let in the front door'
  }, function(err, message) {
    if (!err) {
      // The second argument to the callback will contain the information
      // sent back by Twilio for the request. In this case, it is the
      // information about the text messsage you just sent:
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);
    } else {
      console.log('Oops! There was an error.');
    }
  });
});

// start
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
