const tripsEndpoint = 'http://localhost:3000/api/trips'; // Added Module Five
const options = { // Added Module Five
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};


// Added in Module Three
// Commented Out Module Five
//var fs = require('fs'); // Required for the filesystem to read JSON files 
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Added in Module Two
/* GET travel view */ 
// Commented Out Module Five
//const travel = (req, res) => {
//    res.render('travel', { title: "Travlr Getaways", trips}); // Mod3 "trips" added for handlebars to render
//};

// Added Module Five
/* GET travel view */ 
const travel = async function (req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGIN");
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) {
                message = "No trips exist in our database!";
                }
            }
            res.render("travel", { title: "Travlr Getaways", trips: json, message });
            })
            .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    travel
};