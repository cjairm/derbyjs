const derby = require("derby");

const app = derby.createApp("helloworld", __filename);

app.loadViews(__dirname);

app.get("/", (page, render) => {
	page.render();
});

module.exports = app;
