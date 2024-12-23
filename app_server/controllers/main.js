// Added in Module Two
/* GET Homepage */ 
const index = (req, res) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
  index
};
