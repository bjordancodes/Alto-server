var {Trip} = require('../db/trip');

module.exports = {
    getTrip: (req, res) => {
        if (!Trip) {
            return res.status(500).send("Error getting trip");
        }
        else {
            return res.status(200).send(Trip);
        }
    },
    getOneTrip: (req, res) => {
        const {id} = req.params;
        index = Trip.findIndex((e) => e.trip_id == id);
        if (index == -1){
            return res.status(500).send("Trip ID does not exist");
        }
        else {
            var selected = Trip.filter((e) => e.trip_id == id);
            return res.status(200).send(selected);
        }
    },
    newTrip: (req, res) => {
        const {trip} = req.body;
        const newTrip = {
            trip_id: Trip.length + 1,
            origin: trip.origin,
            destination: trip.destination,
            customer_id: trip.customer_id,
            driver_id: trip.driver_id,
            vehicle_id: trip.vehicle_id,
            fare: trip.fare,
            date: trip.date,
            notes: trip.notes,
            payment_type: trip.payment_type,
            vibe: trip.vibe
        }
        if (!trip) {
            return res.status(500).send("Missing trip details");
        }
        else {
            Trip.push(newTrip);
            return res.status(200).send("Trip added");
        }
    },
    updateTrip: (req, res) => {
        const {trip} = req.body;
        const {id} = req.params;
        const index = Trip.findIndex((e, i) => e.trip_id == id);
        if (index == -1){
            return res.status(500).send("No trip selected");
        }
        else if (!trip){
            return res.status(500).send("No trip information found");
        }
        else {
            Trip[index] = {
                    trip_id: id,
                    origin: trip.origin,
                    destination: trip.destination,
                    customer_id: trip.customer_id,
                    driver_id: trip.driver_id,
                    vehicle_id: trip.vehicle_id,
                    fare: trip.fare,
                    date: trip.date,
                    notes: trip.notes,
                    payment_type: trip.payment_type,
                    vibe: trip.vibe
            }
            res.status(200).send("Trip updated!");
        }
    },
    deleteTrip: (req, res) => {
        const {id} = req.params;
        const index = Trip.findIndex((e, i) => e.trip_id == id);
        if (index == -1){
            return res.status(500).send("No trip selected");
        }
        else {
            Trip = Trip.filter(e => e.trip_id != id);
            return res.status(200).send("Trip successfully deleted!");
        }
    }
}