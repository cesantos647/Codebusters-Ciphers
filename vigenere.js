function encode_v() {

	var keyNum = [];

	var messageNum = []

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	key = document.getElementById('key').value;

	var keyNoSpaceCount = key.split(' ').join('').split('');

	if(typeof(key) === 'undefined' || message === '' || key.length > message.length || key.length !== keyNoSpaceCount.length) {

		alert('Please submit a one word key that is shorter than the message');

	} 

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	key = key.split('');

	var i = 0;

	console.log(message.length);


	while(key.length !== message.length) {


		key.push(key[i % key.length]);

		i++;

	}

	console.log(key);

	for(var t = 0; t < key.length; t++) {
		console.log('Hello');
		var check = false;

		//Checks the alphabet array until the letter is found
		for(var a = 0; a < alphabet.length && check === false; a++) {

			//Once the letter is found, the letter is keyed by the amount specified by the user
			if(key[t] === alphabet[a]) {

				//Encrypts letter
				keyNum.push(alphabet_number[a]);

				//Cancels the search
				check = true;

			}

		}

	}

	message = message.split(' ');

	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		message[y] = message[y].split('')

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false;

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is keyed by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					messageNum.push(alphabet_number[x]);

					//Cancels the search
					check = true;

				}

			}

		}
	
	}

	//Encodes message word by word
	for(var f = 0; f < messageNum.length; f++) {

		encryptionNumCheck.push(alphabet_number[(messageNum[f] + keyNum[f]) % 26]);
		console.log(messageNum[f] + ' + ' + keyNum[f] + ' = ' + ((messageNum[f] + keyNum[f]) % 26) + ' meaning letter  ' + (alphabet[(messageNum[f] + keyNum[f]) % 26]))
	
	}

	console.log(alphabet[4] + ' + ' + alphabet[5] + ' + ' + alphabet[3]);

	for(var g = 0; g < encryptionNumCheck.length; g++) {

		//Resets the search for each letter in the message
		var check = false;

		for(var t = 0; t < alphabet.length && check === false; t++) {

			if(encryptionNumCheck[g] === alphabet_number[t]) {

				encryptionWord.push(alphabet[t]);

			}

		}


	}

	console.log(messageNum);
	console.log(keyNum);
	console.log(encryptionWord);
}

//Convert key to become as long as the message DONE
//Convert message into numbers DONE
//Convert key into numbers DONE
//Add message and key together
//Convert added numbers into letters
//Join the letters into words
//Join the words into a string