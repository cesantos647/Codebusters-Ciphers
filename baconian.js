function encode_b() {

	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}
	
	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(baconian_number[x]);

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

	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;

	console.log(encryption);
	
	return false;

}




function decode_b() {

	var decryptionB = []

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

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
			decryptionWordB = [];
			decryptionB = [];
			while(message[y].length >= 5) {
			
				var decryptionWordB = [];
				
				for(var g = 0; g < 5; g++) {

					decryptionWordB.push(message[y][g]); 

				}

				decryptionWordB = decryptionWordB.join('');

				decryptionB.push(decryptionWordB);

				message[y].splice(0, 5);

			}

			for(var a = 0; a < decryptionB.length; a++) {

				//Resets the search for each letter in the message
				var check = false

				//Checks the alphabet array until the letter is found
				for(var x = 0; x < baconian_number.length && check === false; x++) {

					//Once the letter is found, the letter is changed based on the key
					if(decryptionB[a] === baconian_number[x]) {

						//Encrypts letter
						decryptionWord.push(alphabet[x]);

						//Cancels the search
						check = true;

					} 

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

	console.log(decryption);
	
	return false;

}