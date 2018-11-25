var Driver = require('../db/driver');

module.exports = {
    getDriver: (req, res) => {
        if (!Driver) {
            //500 is a failure status ("internal error")
            return res.status(500).send("Error getting drivers");
         }
         else {
             //200 is the success status ("OK")
            return res.status(200).send(Driver);
         }
    },
    getOneDriver: (req, res) => {
        const {id} = req.params;
        //compares input id to each item in the Driver array
        index = Driver.findIndex((e, i) => e.driver_id == id);
        if (index == -1){
            return res.status(500).send("No driver found");
        }
        else {
            var selected = Driver.filter(e => e.driver_id == id);
            return res.status(200).send(selected);
            //I'm not sure if it would be better to have this return as an array or an object? I'm leaning towards array
            //just because that keeps it consistent with the other 'get'. But if I needed to return it as an object I'd just
            //return (selected[0]) instead
            }
    },
    newDriver: (req, res) => {
        const {driver} = req.body;
        newDriver = {
            driver_id: Driver.length + 1,
            driver_name: driver.driver_name,
            driver_description: driver.driver_description
        }
        if (!driver){
            res.status(500).send("No driver information found")
        }
        else {
            Driver.push(newDriver);
            res.status(200).send("Driver added");
        }
    },
    updateDriver: (req, res) => {
        const {driver} = req.body;
        const {id} = req.params;
        const index = Driver.findIndex((e) => e.driver_id == id);

        if (index == -1){
            return res.status(500).send("No driver selected");
        }
        else if (!driver){
            return res.status(500).send("No driver information found");
        }
        else {
            Driver[index] = {
                id: id,
                driver_name: driver.driver_name,
                driver_description: driver.driver_description
            }
            //On the front end I would make sure that if the original info (driver_name, etc)
            //is not changed that it will autopopulate into the body object so that we don't end up with
            //deleted information because it was left blank.
            return res.status(200).send("Driver successfully updated")
        }
    },
    deleteDriver: (req, res) => {
        const {id} = req.params;
        const index = Driver.findIndex((e) => e.driver_id == id);

        if (index == -1){
            return res.status(500).send("No driver selected");
        }
        else {
            Driver = Driver.filter(e => e.driver_id != id)
            return res.status(200).send("Driver successfully deleted")
        }
    }
}