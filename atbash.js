//No need for a key
function encode_a() {

	encryptionWord = [];

	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	/*//Gets shift number that was submitted
	key = parseInt(document.getElementById('key').value);

	//Checks if shift number is actually a number
	if(isNaN(key) === true ) {

		alert('Please submit a number');

		return false;

	}*/

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	//document.getElementById("keys").innerHTML = 'Shift Number: ' + shift;

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

				//Once the letter is found, the letter is shifted using atbash encryption
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(alphabet[((alphabet.length - x) % alphabet.length)]);

					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Encrypts number
					encryptionWord.push(numbers[((numbers.length - x) % numbers.length)]);

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