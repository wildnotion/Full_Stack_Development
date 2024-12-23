// Added in Module Three
var fs = require('fs'); // Required for the filesystem to read JSON files 
var roomtype = JSON.parse(fs.readFileSync('./data/roomtype.json', 'utf8'));

/* GET rooms view */ 
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", roomtype});
};

module.exports = {
    rooms
};
