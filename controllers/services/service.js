class Services {
	set updateValue(value) {
		return (this.input = value);
	}
	set updateType(type) {
		return (this.type = type);
	}
	get inputValue() {
		return this.input;
	}
	get inputType() {
		return this.type;
	}
	isPhoneNumber(val) {
		const numRegex = /^(213|0){1}(5|7|6)\d{8}/;
		return numRegex.test(val);
	}
	isValidEmail(val) {
		const emailRegex =
			/([a-zA-Z]\w*)@([a-zA-Z]+[0-9]*)\.([a-zA-Z]+\.)+[a-z]{2,}|([a-zA-Z]+\w+[0-9]*\.?[a-zA-Z0-9]*@([a-zA-Z]+\.)+[a-zA-Z]{2,})/g;
		return emailRegex.test(val);
	}
	isValidUserName(val) {
		const usernameRegex = /^[a-zA-Z]+\w*/g;
		return usernameRegex.test(val);
	}
}

module.exports = Services;
