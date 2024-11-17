// Added in Module Three
var fs = require('fs'); // Required for the filesystem to read JSON files 
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Added in Module Two
/* GET travel view */ 
const travel = (req, res) => {
    res.render('travel', { title: "Travlr Getaways", trips}); // Mod3 "trips" added for handlebars to render
};

module.exports = {
    travel
};