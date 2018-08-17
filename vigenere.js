function encode_v() {

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

}

//Convert key to become as long as the message
//Convert message into numbers
//Convert key into numbers
//Add message and key together
//Convert added numbers into letters
//Join the letters into words
//Join the words into a string