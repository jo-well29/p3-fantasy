const app = require('./app.js');


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
app.get("/", (req, res) => {
  res.send("This is root for project three!");
});

module.exports = app;