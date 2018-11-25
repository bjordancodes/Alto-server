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

You can download Postman here: <a href="https://www.getpostman.com/apps" target="blank">https://www.getpostman.com/apps</a><br/>
Postman requires an account, but it is free.

Once you sign into Postman, you can import my pre-made tests.

Start in the top left hand corner, with the 'import' button.

<img src="https://github.com/bjordancodes/Alto-server/blob/master/import.png?raw=true" width="400"/>

Next, choose the postman_collect.json file from the repository files.

<img src="https://github.com/bjordancodes/Alto-server/blob/master/import%202.png?raw=true" width="700"/>

Then we need to expand the file, from the populated list on the left side of the screen.

<img src="https://github.com/bjordancodes/Alto-server/blob/master/run%20test.png" width="400"/>

Last button I promise.

<img src="https://github.com/bjordancodes/Alto-server/blob/master/run%20test%202.png?raw=true" width="400"/>

And your tests should be run, all returning "passed"!

<img src="https://github.com/bjordancodes/Alto-server/blob/master/finished%20tests.PNG?raw=true"/>

You can also select individual files from the left panel if you'd like to run each test individually and look at the responses.

# Final Thoughts

I just want to add that this assignment was THE BEST and I enjoyed planning and creating in a way that I would actually be doing at work. I love that it's reflective of what I'd be doing on the job, and it made me really, really excited about being a developer. So, thank you.
