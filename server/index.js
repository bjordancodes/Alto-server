const express = require('express');
const { json } = require('body-parser');

const {getVehicle, getOneVehicle, newVehicle, updateVehicle, deleteVehicle} = require('./controllers/vehicle_controller');
const {getDriver, getOneDriver, newDriver, updateDriver, deleteDriver} = require('./controllers/driver_controller');


const port = 3001;

const app = express();
app.use(json());

//Driver Controller
app.get('/api/driver/', getDriver);
app.get('/api/driver/:id', getOneDriver)
app.post('/api/driver/', newDriver);
app.put('/api/driver/:id', updateDriver);
app.delete('/api/driver/:id', deleteDriver);

//Trip Controller
// app.get('/api/trip/', getTrip);
// app.post('/api/trip/', newTrip);
// app.put('/api/trip/:id', updateTrip);
// app.delete('/api/trip/:id', deleteTrip);

//Vehicle Controller
app.get('/api/vehicle/', getVehicle);
app.get('/api/vehicle/:id', getOneVehicle)
app.post('/api/vehicle/', newVehicle);
app.put('/api/vehicle/:id', updateVehicle);
app.delete('/api/vehicle/:id', deleteVehicle);



app.listen(port, ()=> console.log(`Server listening on port: ${port} ^-^`))