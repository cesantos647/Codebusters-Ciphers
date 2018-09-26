var random_key = [];
var index;

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function keyGenerate() {
	//Creates area for the randomized key
	var random_key = [];
	//Creates a place for unused letters
	var alphabet_check = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	//Pushes a random letter into a random place in the key until it's all gone
	while(alphabet_check.length > 0) {
		var index = Math.floor(Math.random() * alphabet_check.length);
		random_key.push(alphabet_check[index]);
		alphabet_check.splice(index,1);
	}
	key = random_key.join('');
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
	//Makes everything lowercase
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

function checkKey() {
	var alphabet_check = alphabet;
	alphabet_check.splice(4,1);
	//alphabet_check.push('j');
	var check_num = 0
	console.log(key);
	for(var i=0;i<key.length;i++) {
		check = false;
		console.log("i = " + i);
		for(var z=0;z<alphabet.length;z++) {
			console.log("z =  " + z);

			console.log(key[i]+ "===" +alphabet[z]);
			if(key[i] === alphabet[z]) {
				console.log('hello');
				console.log(alphabet_check.length);
				for(var x=0;x<alphabet_check.length;x++) {
					console.log(key[i] + " == " +alphabet_check[x]);
					console.log('woo');
					if(key[i]==alphabet_check[x]) {
						alphabet_check.splice(x,1);
						check_num++
						check = true;
					}
				}
			} else {
				check = true;
			}
		}
	}
	if(check_num < 26) {
		keyGenerate();
		console.log(key);
		//checkKey();
	}
console.log("Number of errors: " + (26-check_num));
console.log(key);
}