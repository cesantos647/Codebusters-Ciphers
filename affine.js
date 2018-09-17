function encode_af() {

	//Resets encrypted message
	encryptionWord = [];
	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;
	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {
		alert('Please submit a message');
		return false;
	}

	//Gets key number that was submitted
	var key1 = parseInt(document.getElementById('key').value);
	var key2 = parseInt(document.getElementById('key2').value);
	//Checks if key number is actually a number
	if(isNaN(key1) === true ) {
		alert('Please submit a number');
		return false;
	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;
	//Displays key number
	document.getElementById("keys").innerHTML = 'Function: ' + 'f(x) = ' + key1 + 'x + ' + key2 + ' mod 26';

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {
		message[z] = message[z].split('');
	}

	//Encodes message word by word
	for(y = 0; y < message.length; y++) {
		//Resets array to prepare for a new word
		encryptionWord = [];
		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {
			//Resets the search for each letter in the message
			var check = false
			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){
				//Once the letter is found, the letter is keyed by the amount specified by the user
				if(message[y][i] === alphabet[x] || capital[x]) {
					//Encrypts letter
					encryptionWord.push(alphabet[(((x * key1) + key2) % alphabet.length)]);
					//Cancels the search
					check = true;
				} else if(message[y][i] === numbers[x % numbers.length]) {
					//Encrypts number
					encryptionWord.push(numbers[(((x * key1) + key2) % numbers.length)]);
					//Cancels the search
					check = true;
				}
			}
		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);
	}

	//Joins each item in the array into a single string
	encryption = encryption.join(' ');
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	return false;


}