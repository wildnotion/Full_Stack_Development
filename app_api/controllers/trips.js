// Added in Module Five
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register the model
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

        if(!q) {
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(200)
                .json(q);
        }
};

// GET: lists a single trip
const tripsFindByCode = async(req, res) => { // Added in Module Five
    const q = await Model
        .find({'code' : req.params.tripCode }) //return  single record
        .exec();

    if(!q){
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};