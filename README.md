Setup:

 - run live server from root of the project (so that it points to `index.html` file)
 - tunnel the server to https via ngrok (`ngrok http [your-localhost-server-port]`)
 - open Miro app, go to your profile and select `Your Apps`
 - fill in App URL field indicating ngrok https address
 - set up proper Permissions (`boards:read` and `boards:write`)
 - click `Install app and get OAuth token` (right below the Permissions list)

 Done! Now you can select `Go to boards` in the top left corner, create a board and have fun with the app. :)
 You can make sure it works by opening up developers console and check if your logs are there (provided you left any in your code)