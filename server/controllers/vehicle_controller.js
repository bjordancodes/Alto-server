var {Vehicle} = require('../db/vehicle')

module.exports = {
    getVehicle: (req, res) => {
        if (!Vehicle) {
           return res.status(500).send("Error getting vehicle");
        }
        else {
           return res.status(200).send(Vehicle);
        }
    },
    getOneVehicle: (req, res) => {
        const {id} = req.params;
        index = Vehicle.findIndex((e, i) => e.vehicle_id == id);
        if (index == -1){
            return res.status(500).send("Vehicle does not exist");
        }
        else {
            var selected = Vehicle.filter(e => e.vehicle_id == id);
            return res.status(200).send(selected);
            }
    },
    newVehicle: (req, res) => {
       const {vehicle} = req.body;
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
        const index = Vehicle.findIndex((e, i) => e.vehicle_id == id);
        if (index == -1){
            return res.status(500).send("No vehicle selected");
        }
        else if (!vehicle){
            return res.status(500).send("No vehicle information found");
        }
        else {
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
        index = Vehicle.findIndex((e, i) => e.vehicle_id == id);
        if (index == -1){
            return res.status(500).send("Vehicle does not exist");
        }
        else {
            Vehicle = Vehicle.filter(e => e.vehicle_id != id);
            return res.status(200).send("Vehicle successfully deleted!");
        }
    }
}