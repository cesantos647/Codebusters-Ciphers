
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

	} else if(cipher_value === 'Hill') {

		document.getElementById('message_input').innerHTML = 'Your Message';

		document.getElementById('key_input').innerHTML = 'Key'

	}

}

function execute() {
	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		encode();
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		decode();

	} else if(cipher_value === 'Hill') {

		

	}
}