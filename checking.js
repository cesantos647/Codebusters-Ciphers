var version, cipher, version_value, cipher_value;
//Function to change what's on the screen based on cipher and if they want to encode or decrypt
function change_option() {
	version = document.getElementById('version_check');
    
    cipher = document.getElementById('cipher_check');

    version_value = version[version.selectedIndex].value;
    
    cipher_value = cipher[cipher.selectedIndex].value;

	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';
		
		document.getElementById('key_input').innerHTML = 'Shift Number';
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message'

		document.getElementById('key_input').innerHTML = 'Amount Shifted'

	} else if((cipher_value === 'Atbash' || cipher_value === 'Baconian') && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';

	} else if((cipher_value ==='Atbash' || cipher_value === 'Baconian') && version_value ==='Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message';

	} else if(cipher_value === 'Hill') {

		document.getElementById('message_input').innerHTML = 'Your Message';

		document.getElementById('key_input').innerHTML = 'Key (4 Characters)';

	}

	if(cipher_value === 'Hill' || cipher_value === 'Affine' || cipher_value === 'Vigenere') {

		document.getElementById('Decrypt').style.display = 'none';

	} else {

		document.getElementById('Decrypt').style.display = 'block';

	}

	if((cipher_value === 'Aristocrat'  || cipher_value === 'Patristocrat') && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';

		document.getElementById('key_input').innerHTML = 'Key';

		document.getElementById('checkbox').style.display = 'block'

	} else {

		document.getElementById('checkbox').style.display = 'none'

	}

	if(cipher_value === 'Affine') {

		document.getElementById('key_input').innerHTML = 'Multiplier (a)';

		document.getElementById('key_input2').innerHTML = 'Linear Shift (b)';

		document.getElementById('key2').style.display = 'block';
		
		document.getElementById('key_input2').style.display = 'block';

	} else {

		document.getElementById('key2').style.display = 'none';
		
		document.getElementById('key_input2').style.display = 'none';

	}

	if(document.getElementById('checkbox').style.display === 'none') {

		document.getElementById('checkbox_input').checked = false;

	}

	if(cipher_value === 'Aristocrat' && version_value === 'Decrypt' || cipher_value === 'Patristocrat' && version_value === 'Decrypt')  {

		document.getElementById('message_input').innerHTML = 'Encrypted Message';

		document.getElementById('key_input').innerHTML = 'Key';

	}

	if(document.getElementById('checkbox_input').checked === true || cipher_value === 'Atbash' || cipher_value === 'Baconian') {

		document.getElementById('key').style.display = 'none';
		
		document.getElementById('key_input').style.display = 'none';

	} else {

		document.getElementById('key').style.display = 'block';

		document.getElementById('key_input').style.display = 'block';

	}

}




function execute() {
	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		encode_c();
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		decode_c();

	} else if(cipher_value === 'Atbash' && version_value === 'Decrypt') {

		encode_a();

	} else if(cipher_value === 'Atbash' && version_value === 'Encrypt') {

		decode_a();

	} else if(cipher_value === 'Hill') {

		encode_h();

	} else if(cipher_value === 'Aristocrat' && version_value === 'Encrypt') {

		encode_ar();

	} else if(cipher_value === 'Aristocrat' && version_value === 'Decrypt') {

		decode_ar();

	} else if(cipher_value === 'Patristocrat' && version_value === 'Encrypt') {

		encode_p();

	} else if(cipher_value === 'Patristocrat' && version_value === 'Decrypt') {

		decode_p();

	} else if(cipher_value === 'Affine') {

		encode_af();

	} else if(cipher_value === 'Baconian' && version_value === 'Encrypt') {

		encode_b();

	} else if(cipher_value === 'Baconian' && version_value === 'Decrypt') {

		decode_b();

	} else if(cipher_value === 'Vigenere') {

		encode_v();

	}

}