import derby from "derby";

const app = derby.createApp("shop", __filename);

app.loadViews(`${__dirname}/pages`);

app.get("/", (page: any) => {
	page.render();
});

export default app;
