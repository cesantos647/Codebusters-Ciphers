function encode_v() {

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	key = document.getElementById('key').value;

	//var keySpaceCount = key.split(' ').length;

	var keyNoSpaceCount = key.split(' ').join('').split('');

	if(typeof(key) === 'undefined' || message === '' || key.length > message.length || key.length !== keyNoSpaceCount.length) {

		alert('Please submit a key that is shorter than the message');

	} 

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	key = key.split('');

	var i = 0;

	console.log(message.length);


	while(key.length !== message.length) {


		key.push(key[i % (key.length-1)]);

		i++;

	}

	console.log(key);

	for(var t = 0; t < key.length; t++) {

		var keyNum = [];

		//Checks the alphabet array until the letter is found
		for(var a = 0; a < alphabet.length && check === false; a++) {

			//Once the letter is found, the letter is keyed by the amount specified by the user
			if(key[t] === alphabet[x]) {

				//Encrypts letter
				keyNum.push(alphabet_number[x]);

				//Cancels the search
				check = true;

			}

		}

	}

	message = message.split(' ');
	//For each word
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('')

		//Encodes message word by word
		for(y = 0; y < message.length; y++) {

			var messageNum = []

			//Encrypts each letter or number in the word
			for(var i = 0; i < message[y].length; i++) {

				//Resets the search for each letter in the message
				var check = false

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

	}

	console.log(messageNum);
	console.log(keyNum);
	//AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

}

//Convert key to become as long as the message DONE
//Convert message into numbers DONE
//Convert key into numbers
//Add message and key together
//Convert added numbers into letters
//Join the letters into words
//Join the words into a string