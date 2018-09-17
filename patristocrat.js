var encryptionP = [];

var encryptionWordP = [];

function encode_p() {

	encryptionP = [];
	
	encryptionWordP = [];
	
	encryption = [];

	encryptionWord = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	if(document.getElementById('checkbox_input').checked === false) {

		key = document.getElementById('key').value;

		if(key.length !== 26) {

			alert('Please submit a proper key')

			return false;

		}

	} else {

		keyGenerate();
	
	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWordP = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWordP.push(key[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWordP = encryptionWordP.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryptionP.push(encryptionWordP);
	}

	encryptionP = encryptionP.join('').split('');
	
	while(encryptionP.length >= 5) {
		
		encryptionWord = [];

		for(var t = 0; t < 5; t++) {
		
			encryptionWord.push(encryptionP[t]);
		
		}
		
			encryptionWord = encryptionWord.join('');

			encryptionP.splice(0, 5);

			encryption.push(encryptionWord);
	
	}
	
	encryptionWord = [];
	
	if(encryptionP.length > 0 && encryptionP.length < 5) {

		encryptionWord = [];

		for(var q = 0; q < encryptionP.length; q++) {
		
			encryptionWord.push(encryptionP[q]);
		
		}

			encryptionWord = encryptionWord.join('');

			encryption.push(encryptionWord);

	}

	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	
	return false;

}





function decode_p() {

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	key = document.getElementById('key').value;

	if(key.length !== 26) {

		alert('Please submit a proper key')

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < key.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === key[x]) {

					//Encrypts letter
					decryptionWord.push(alphabet[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		decryption.push(decryptionWord);
	}

	decryption = decryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + decryption;
	
	return false;

}