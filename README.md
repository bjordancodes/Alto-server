# Alto Sample API
Homework for application 11/23/18 <p/>
This is a sample API based on image mockups from the Alto app.
<p/>
I began by working out my schema, choosing what column names and data types I would need.
<p/>
<img src="https://raw.githubusercontent.com/bjordancodes/Alto-server/master/alto%20img.jpg" height="700px"/>
<p/>
Then I set up the node server using the express and body-parser packages.
<p/>
I chose to create some sample data for each of my tables so the 'get' function would
work out of the box. I have structured my content as it will appear in the return. Normally, instead of 
using local memory and pre-loaded data I would link my server to a database such as Heroku using
axios and set up PostgreSQL calls to bring in and organize my data.

For example, I would link "driver_id", "vehicle_id" and "customer_id" to their respective tables using join requests
so that the necessary data was populated on the front end. If you would like to see an example
of these PostgreSQL and axios calls you can check them out in my Dallas Dallas SC project here: 

database calls: <a href="https://github.com/bjordancodes/dash-dallas-sc/tree/master/db" target="blank">https://github.com/bjordancodes/dash-dallas-sc/tree/master/db</a><br/>
server and controllers: <a href= "https://github.com/bjordancodes/dash-dallas-sc/tree/master/server" target="blank">https://github.com/bjordancodes/dash-dallas-sc/tree/master/server</a>
<p/>

# Give it a Try

in your terminal:
* Clone down the repository
* Cd into the repository and run "npm install"
* run "node server/index.js"

Your server should now be running on port 3001.

I used Postman to test my endpoints.

You can download Postman here: <a href="https://www.getpostman.com/apps" target="blank">https://www.getpostman.com/apps</a>
Postman requires an account, but it is free.

