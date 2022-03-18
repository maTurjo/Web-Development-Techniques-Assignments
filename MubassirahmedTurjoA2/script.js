/**
 * This function validates the form and returns true if all conditions are met and false if any one of the
 * conditions is not met. Add your validation code to this function.
 * @returns boolean
 */
function validate() {
	//Input Values are set here
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var telephoneNumber = document.getElementById("telephone").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm_password").value;
	var course = document.getElementById("course").value;
	var comment = document.getElementById("Comment").value;

	//error spans are caught and cleared here
	var errorSpans = document.getElementsByClassName("error");
	for (var i = 0; i < errorSpans.length; i++) {
		errorSpans.item(i).innerText = "";
	}

	//Input Validation is done here
	if (telephoneNumber.length > 0) var isValidTelephone_bool = isValidTelephone(telephoneNumber);
	else var isValidTelephone_bool = true;

	var isValidName_bool = isValidName(name);
	var isValidAddress_bool = isValidAddress(address);
	var isValidEmail_bool = isValidEmail(email);
	var isValidPassword_bool = isValidPassword(password);
	var isValidPasswordMatch_bool = isValidPasswordMatch(password, confirm_password);

	if (isValidName_bool && isValidAddress_bool && isValidEmail_bool && isValidPassword_bool && isValidPasswordMatch_bool && isValidTelephone_bool) return true;

	return false;
}

//function to check password match
function isValidPasswordMatch(p1, p2) {
	if (p2 == "") {
		document.getElementById("err_confirm_password").innerText += "\n Repeat Password is required";
	}
	if (p1 == p2) {
		err_password.value = "";
		return true;
	} else {
		document.getElementById("err_password").innerText += "\n Password Doesn't Match";
		return false;
	}
}

//function to validate password
function isValidPassword(password, err_password) {
	if (password.length == 0) {
		document.getElementById("err_password").innerText += "Password is Required";
		return false;
	}
	if (password.length < 8) {
		document.getElementById("err_password").innerText += "\n Password Should Be at lease 8 characters long with 2 digits";
		return false;
	} else if (password.length >= 8 && password.replace(/\D/g).length >= 2) return true;
	return false;
}

//Function To Validate Name
function isValidName(name, err_name) {
	if (name.length == 0) {
		document.getElementById("err_name").innerText = "Name Is Required";
		return false;
	}
	if (name.length < 2) {
		document.getElementById("err_name").innerText = "Name Should Be At least Two Characters long";
		return false;
	}
	return true;
}
//Function To Validate Address
function isValidAddress(address) {
	if (address.length == 0) {
		document.getElementById("err_address").innerText = "Address is required";
		return false;
	}
	if (address.length < 2) {
		document.getElementById("err_address").innerText = "Address should be at least 2 characters long";
		return false;
	}
	return true;
}

/**
 * This functions checks to see if a telephone number is a valid NANP
 * @param {String} subjectString
 * @returns boolean
 */
function isValidTelephone(subjectString) {
	// North American Number Plan, eg: 1234567890, 123-456-7890, 123.456.7890, 123 456 7890, (123) 456 7890
	var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (phoneRegex.test(subjectString)) {
		return true;
	} else {
		document.getElementById("err_telephone").innerText = "Number should be a north american number plan \n eg: 1234567890, 123-456-7890, 123.456.7890, 123 456 7890, (123) 456 7890";
		return false;
	}
}

/**
 * This function checks to see if an email address is valid of type anystring@anystring.anystring
 * @param {string} subjectString
 * @returns boolean
 */
function isValidEmail(subjectString) {
	var emailRegex = /\S+@\S+\.\S+/;
	if (subjectString.length == 0) {
		document.getElementById("err_email").innerText = "Email is required";
		return false;
	}
	if (emailRegex.test(subjectString)) {
		return true;
	} else {
		document.getElementById("err_email").innerText = "Is Not Valid Email Address";
		return false;
	}
	return false;
}

function resetf() {
	//error spans are caught and cleared here

	var errorSpans = document.getElementsByClassName("error");
	for (var i = 0; i < errorSpans.length; i++) {
		errorSpans.item(i).innerText = "";
	}
}
