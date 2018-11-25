/* I chose to create some sample data for each of my tables so the 'get' function would
work out of the box. I have structured my content as it will appear in the return. Normally, instead of 
using local memory and pre-loaded data I would link my server to a database such as Heroku using
axios and set up PostgreSQL calls to bring in and organize my data.

For example, I would link "driver_id", "vehicle_id" and "customer_id" to their respective tables
so that the necessary data was populated on the front end. If you would like to see an example
of these PostgreSQL and axios calls you can check them out in my Dallas Dallas SC project here: 

database calls: https://github.com/bjordancodes/dash-dallas-sc/tree/master/db
server and controllers: https://github.com/bjordancodes/dash-dallas-sc/tree/master/server  
*/

module.exports = {
   
   Trip: [ {
        trip_id: 0,
        origin: "123 Fake Address Way",
        destination: "123 Destination Blvd",
        customer_id: 0,
        driver_id: 0,
        vehicle_id: 0,
        fare: 100,
        Date: "11/23/2018",
        Notes: "Pick up in the back",
        Payment_type: "Visa02",
        Vibe: "Smooth Jazz"
        
    },
    {
        trip_id: 1,
        origin: "123 Cooper Way",
        destination: "123 Westminster Blvd",
        customer_id: 1,
        driver_id: 1,
        vehicle_id: 1,
        fare: 120,
        Date: "11/23/2018",
        Notes: "Wheelchair assistance needed",
        Payment_type: "Amex01",
        Vibe: "Punk Country"
        
    }
]
}