var {Vehicle} = require('../db/vehicle')

module.exports = {
    getVehicle: (req, res) => {
        console.log('Vehicle_controller was hit')
        if (!Vehicle) {
           return res.status(500).send("Error getting vehicle");
        }
        else {
           return res.status(200).send(Vehicle);
        }
    },
    getOneVehicle: (req, res) => {
        const {id} = req.params;
        if (!Vehicle) {
            return res.status(500).send("No vehicles found");
        }
        else {
            var selected = Vehicle.filter(e => e.vehicle_id == id);
            console.log(selected)
            return res.status(200).send(selected);
            //I'm not sure if it would be better to have this return as an array or an object? I'm leaning towards array
            //just because that keeps it consistent with the other 'get'. But if I needed to return it as an object I'd just
            //return (selected[0]) instead
            }
    },
    newVehicle: (req, res) => {
       const {vehicle} = req.body;
       console.log(req.body);
       const newVehicle = {
        vehicle_id: Vehicle.length + 1,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        color: vehicle.color,
        VIN: vehicle.VIN,
        driver_id: vehicle.driver_id
       }
        if (!vehicle) {
            return res.status(500).send("Missing vehicle details");
        }
        else {
            Vehicle.push(newVehicle);
            return res.status(200).send("Vehicle added");
        }
    },
    updateVehicle: (req, res) => {
        const {vehicle} = req.body;
        const {id} = req.params;
        // console.log(vehicle, id)
        if (!id){
            return res.status(500).send("No vehicle selected");
        }
        else if (!vehicle){
            return res.status(500).send("No vehicle information found");
        }
        else {
            let index = Vehicle.findIndex((e, i) => e.vehicle_id == id);
            Vehicle[index] = {
            id: id,
            make: vehicle.make,
            model: vehicle.model,
            year: vehicle.year,
            color: vehicle.color,
            VIN: vehicle.VIN,
            driver_id: vehicle.driver_id
           }
            res.status(200).send("Vehicle updated!");
        }
    },
    deleteVehicle: (req, res) => {
        const {id} = req.params;
        if (!id){
            return res.status(500).send("No vehicle selected");
        }
        else {
            Vehicle = Vehicle.filter(e => e.vehicle_id != id);
            return res.status(200).send("Vehicle successfully deleted!");
        }
    }
}