# Doorman

This script answers my front door and lets me know that guests have arrived when enabled.


## How this works

1. Someone punches in my flat number on the door entry system
2. Door entry system calls my Google Voice number
3. If enabled then Google Voice automatically forwards calls from the entry system to a Twilio number. This is easily done using 'groups' in your Google contacts in the Voice settings.
4. Twilio receives the call and hits up this script, running on a Heroku account
5. Twilio reads the XML response and says some words followed by a DTMF tone that opens the door
6. A text message is sent to my phone to alert me that someone was let in
7. Profit?


## Setup

The following environment variables are needed to get this working. You'll also need a door entry system that responds to the '9' tone.

```
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_NUMBER
PHONE_NUMBER
```
