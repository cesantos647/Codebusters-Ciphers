var random_key = [];
var index;

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function keyGenerate() {
	random_key = [];

	//Creates random number
	index = Math.round(Math.random() * 25);
	if(index === 0) {
		index = Math.round(Math.random() * 25);
	}
	
	//Pushes the first letter
	random_key.push(alphabet[index]);

	//Pushes the rest of the alphabet randomly
	while(random_key.length < 26) {
		check = false;
		index = Math.round(Math.random() * 25);
		for(var l = 0; l < random_key.length && check === false; l++) {
			if(alphabet[index] === random_key[l]) {
				check = true
			}
		}

		//Checks arguments then pushes letter
		if(check === false && index !== random_key.length) {
			random_key.push(alphabet[index]);
		}
		if(index === random_key.length) {
			random_key.splice(Math.round(Math.random() * random_key.length), 0, alphabet[index]);
		}
	}
	

	//Makes sure that a letter is never in its original position
	var checkingRandom = true;
	while(checkingRandom === true) {
		var q = 0;
		for(var y = 0; y < alphabet.length; y++) {
			if(alphabet[y] === random_key[y]) {				
				q+=1;			
			}		
		}
		if(q === 0) {			
			checkingRandom = false;
		} else {
			arraymove(random_key, 0, 25);
		}
	}
	
	random_key = random_key.join('');
	key = random_key;
}




function encode_ar() {

	//Resets encryption message
	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}
	
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
					encryptionWord.push(key[x]);

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
	
	return false;

}





function decode_ar() {

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

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