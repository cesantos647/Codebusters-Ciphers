var random_key = [];

var index;

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
 
    arr.splice(fromIndex, 1);
 
    arr.splice(toIndex, 0, element);
}

function keyGenerate() {
	random_key = [];

	index = Math.round(Math.random() * 25);
	
	if(index === 0) {
	
		index = Math.round(Math.random() * 25);
	
	}
	
	random_key.push(alphabet[index]);

	while(random_key.length < 26) {

		check = false;

		index = Math.round(Math.random() * 25);

		for(var l = 0; l < random_key.length && check === false; l++) {

			if(alphabet[index] === random_key[l]) {
	
				check = true

			}

		}

		if(check === false && index !== random_key.length) {

			random_key.push(alphabet[index]);

		}

		if(index === random_key.length) {

			random_key.splice(Math.round(Math.random() * random_key.length), 0, alphabet[index]);

		}

	}
	
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

	console.log(random_key);

}

/*function encode_ar() {

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

		alert('Please submit a key');

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	message = message.split(' ').join('').split('');

}*/