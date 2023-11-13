const Services = require("../services/service");

function renderService(req, res) {
	let param = req.params.title;
	res.render("pages/services/index", {
		pageTitle: param.split("-").join(" "),
		currPage: param.split("-")[0].toLowerCase(),
	});
}
async function checkInput(req, res) {
	//create service
	const service = new Services();
	//update value and type
	service.updateType = req.body.type;
	service.updateValue = req.body.input;
	//store data
	const value = service.inputValue;
	const type = service.inputType;

	if (type == "number") {
		res.status(200).json({ isValid: service.isPhoneNumber(value) });
	} else if (type == "email") {
		res.status(200).json({ isValid: service.isValidEmail(value) });
	} else {
		res.status(200).json({ isValid: service.isValidUserName(value) });
	}
}
module.exports = { renderService, checkInput };
