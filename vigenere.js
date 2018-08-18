function encode_v() {

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	key = document.getElementById('key').value;

	if(typeof(key) === 'undefined' || message === '' || key.length > message.length) {

		alert('Please submit a key that is shorter than the message');

	} 

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	key = key.split('');

	var i = 0;

	while(key.length !== message.length) {

		i++;

		key.push(key[i % key.length]);

	}

	console.log(key);

}

//Convert key to become as long as the message
//Convert message into numbers
//Convert key into numbers
//Add message and key together
//Convert added numbers into letters
//Join the letters into words
//Join the words into a string