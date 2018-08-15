
var version, cipher, version_value, cipher_value;

//Function to change what's on the screen based on cipher and if they want to encode or decrypt
function change_option() {

	version = document.getElementById('version_check');
    
    cipher = document.getElementById('cipher_check');

    version_value = version[version.selectedIndex].value;
    
    cipher_value = cipher[cipher.selectedIndex].value;
	
	console.log(version_value + ' ' + cipher_value);

	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';
		
		document.getElementById('key_input').innerHTML = 'Shift Number';
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message'

		document.getElementById('key_input').innerHTML = 'Amount Shifted'

	} else if(cipher_value === 'Atbash' && version_value === 'Encrypt') {


		document.getElementById('message_input').innerHTML = 'Your Message';

	} else if(cipher_value ==='Atbash' && version_value ==='Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message';

	} else if(cipher_value === 'Hill') {

		document.getElementById('message_input').innerHTML = 'Your Message'

		document.getElementById('key_input').innerHTML = 'Key (4 Characters)'

	}

	if(cipher_value === 'Atbash') {

		document.getElementById('key').style.display = 'none';
		
		document.getElementById('key_input').style.display = 'none';

	} else {

		document.getElementById('key').style.display = 'block';

		document.getElementById('key_input').style.display = 'block';

	}

	if(cipher_value === 'Hill') {

		document.getElementById('Decrypt').style.display = 'none';

	} else {

		document.getElementById('Decrypt').style.display = 'block';

	}

}

function execute() {
	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		encode_c();
	
	} else if(cipher_value ==='Caesar' && version_value === 'Encrypt') {

		decode_c();

	} else if(cipher_value === 'Atbash' && version_value === 'Decrypt') {

		encode_a();

	} else if(cipher_value === 'Atbash' && version_value === 'Encrypt') {

		decode_a();

	} else if(cipher_value === 'Hill') {

		encode_h();

	}
}