exports.createTask = async (req, res) => {
	let result = Array.isArray(req.data);
	var arr = req.data;
	var counts={};
	arr=arr.join("").split("");
	arr.sort();
	arr.forEach((v)=>(counts[v]=(counts[v])?++counts[v]:1));
	var pat1=/[0-9]/g;
	var pat1=/[a-zA-Z]/g;
	var letters = req.data.match(pat2);
	var digit = req.data.match(pat1);
	let response = {
		"is_success":true,
		"user_id":"piyush_goswami_151100",
		"count":counts,
		"email" : "1929274@kiit.ac.in",
		"roll_number":"1929274",
		"numbers" : digit,
		"alphabet":letter,
	};
	console.log(req);
	res
    .code(200)
    .header("Content-Type", object.ContentType)
    .header("Content-Length", object.ContentLength)
    .send(object.Body);
};