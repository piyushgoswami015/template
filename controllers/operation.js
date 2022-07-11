exports.createTask = async (req, res) => {
	let result = Array.isArray(req.Body);
	let response = {
		"":"",
		"":"",
	};
	console.log(req);
	res
    .code(200)
    .header("Content-Type", object.ContentType)
    .header("Content-Length", object.ContentLength)
    .header("Last-Modified", object.LastModified)
    .header("ETag", object.ETag)
    .send(object.Body);
};