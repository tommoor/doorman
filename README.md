# Doorman

This script answers my front door and lets me know that guests have arrived when enabled.


## How this works

1. Door box calls my Google Hangouts number
2. If turned on then Hangouts forwards calls from the Door box to a Twilio number
3. Twilio hits up this script, running on a Heroku account
4. Twilio reads the XML response and says some words followed by a DTMF tone that opens the door
5. A text message is sent to my phone to alert me that someone was let in
6. Profit?
