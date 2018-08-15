//This can only support 2x2 keys
//The way the key is set up needs to be fixed
function encode_h() {

	encryptionWord = [];
	
	encryption = [];

	hillKeyNumCheck = [];

	hillKeyCheck = [];

	encryptionWordCheck = [];

	encryptionNumCheck = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	//Gets shift number that was submitted
	key = document.getElementById('key').value;

	//Checks if there is a key
	if(typeof(key) === 'undefined' || key === '' || key.length !== 4) {

		alert('Please submit a key with 4 characters');

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	message = message.split(' ').join('').split('');
	//This whole part is for making the matrices for the message
	while(((message.length / 2) % 1) !== 0) {

		message.push('z');

	}

	for(var x = 0; x < message.length; x++) {

		check = false

		for(var i = 0; i < alphabet.length && check === false; i++) {

			if(message[x] === alphabet[i]){

				hillSplitNum.push(alphabet_number[i]);

				check = true;

			} else if(typeof(message[x]) === 'number'){

				hillSplitNum.push(message[x]);

				check = true;

			}

		}

		if((x % 2) === 1) {

			hillSplit.push(message[x]);

			encryptionWordCheck.push(hillSplit);

			encryptionNumCheck.push(hillSplitNum);

			hillSplitNum = [];

			hillSplit = [];

		} else {

			hillSplit.push(message[x]);

		}

	}

	console.log(encryptionWordCheck);

	console.log(encryptionNumCheck);

	//This is for the key
	key = key.split('');
	check = false
	while(key.length % 4 !== 0) {

		key.push(key[0]);

		console.log(key.length);

		if(key.length % 4 !== 0) {

			key.push(key[1]);

		}

	}

	for(var p = 0; p < key.length; p++) {
		
		for(var e = 0; e < alphabet.length; e++) {

			if(key[p] === alphabet[e]) {

				hillKeyNum.push(alphabet_number[e]);

			} else if(typeof(key[p]) === 'number'){

				hillKeyNum.push(key[p]);

			}

		}

		if((p % 2) === 1) {

			hillKey.push(key[p]);

			hillKeyCheck.push(hillKey);

			hillKeyNumCheck.push(hillKeyNum);

			hillKeyNum = [];

			hillKey = [];

		} else {

			hillKey.push(key[p]);

		}
	}

	//Way to make the key actually work since the method places the array items the wrong way, vertical instead of horizontally first
	var hillKeyCheckReal = [[hillKeyCheck[0][0],hillKeyCheck[1][0]],[hillKeyCheck[0][1],hillKeyCheck[1][1]]]

	var hillKeyNumCheckReal = [[hillKeyNumCheck[0][0],hillKeyNumCheck[1][0]],[hillKeyNumCheck[0][1],hillKeyNumCheck[1][1]]]
	
	hillKeyCheck = hillKeyCheckReal;
	
	hillKeyNumCheck = hillKeyNumCheckReal;
	
	console.log(hillKeyCheckReal);
	
	console.log(hillKeyCheck);

	console.log(hillKeyNumCheck);

	hillEncryptWord = [];
	
	//Now for the actual encryption
	for(var t = 0; t < encryptionNumCheck.length; t++) {
	
		hillEncryptWord.push([(((hillKeyNumCheck[0][0] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][0] * encryptionNumCheck[t][1])) % 26), (((hillKeyNumCheck[0][1] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][1] * encryptionNumCheck[t][1])) % 26)]);
	
			console.log(([(((hillKeyNumCheck[0][0] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][0] * encryptionNumCheck[t][1])) % 26), (((hillKeyNumCheck[0][1] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][1] * encryptionNumCheck[t][1])) % 26)]));
	
	}

	console.log(hillEncryptWord);

	for(var z = 0; z < hillEncryptWord.length; z++) {
		
		for(var o = 0; o < hillEncryptWord[z].length; o++) {

			for(var h = 0; h < alphabet_number.length; h++) {

				if(hillEncryptWord[z][o] === alphabet_number[h]) {

					encryptionWord.push(alphabet[(h)]);

				}

			}

		}

	}

	encryption = encryptionWord.join('');

	document.getElementById('output').innerHTML = 'Encrypted Message: ' + encryption;
	
	console.log(encryption);

}