const derby = require("derby");

const app = derby.createApp("routingapp", __filename);

app.loadViews(`${__dirname}/pages`);

app.get("/", function (page) {
	page.render("home");
});

app.get("/first", function (page) {
	page.render("first");
});

app.get("/second", function (page) {
	page.render("second");
});

module.exports = app;
