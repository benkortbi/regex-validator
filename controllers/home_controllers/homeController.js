function renderHome(req, res) {
	res.render("pages/home/index", {
		pageTitle: "Validator: Data checker for different services",
		cards: [
			{ title: "Number validator", icon: "./assets/phone.svg" },
			{ title: "Email validator", icon: "./assets/email.svg" },
			{ title: "Username validator", icon: "./assets/profile.svg" },
		],
	});
}

module.exports = {
	renderHome,
};
