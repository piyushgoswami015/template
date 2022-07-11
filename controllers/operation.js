exports.createTask = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const taskCollection = astraClient.namespace("feed").collection("taskCollection");

	const post = await taskCollection.create({
		"task": req.body.task
	});
	console.log(req);
	res.send("POST request was successfully completed.");
};