/*var accountSid = 'ACadcd3fa8df3730b00ea6997dd7e8c36c'; // Your Account SID from www.twilio.com/console
var authToken = '792e6e35cdc2bd3bae832bca769f84d2';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: 'whatsapp:+5511989040106',  // Text this number
    from: 'whatsapp:+14155238886' // From a valid Twilio number
})
.then(message => console.log(message.sid));*/

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
var express = require('express');
var app = express();
app.post('/push',(req,res) => {
    const accountSid = 'ACadcd3fa8df3730b00ea6997dd7e8c36c';
    const authToken = '792e6e35cdc2bd3bae832bca769f84d2';
    const client = require('twilio')(accountSid, authToken);
    var message = 'Hi Olá _*Whatsapp*_ dolar !!! \nSegunda linha';
    //const translatebody = emoji(message);
    
    client.messages
          .create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+5511989040106',
            mediaUrl: 'https://demo.twilio.com/owl.png'
            
          })
          .then(message => console.log(message.sid))
          .done();
});
    app.listen(1337, () => {
        console.log('Example app listening on port 1337.');
    });

 