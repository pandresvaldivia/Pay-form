import {
	$nameInput,
	$cardInput,
	$dateInput,
	$cvvInput,
	$addrInput,
} from './selectors.js';
import {
	validateField,
	formatCreditCard,
	formatDate,
	formatCvv,
	formatName,
} from './functions.js';

$nameInput.addEventListener('keyup', (e) =>
	validateField(e.target, /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g)
);

$cardInput.addEventListener('keyup', (e) =>
	validateField(e.target, /^(\d{4}\s){3}\d{4}|\d{16}$/)
);

$dateInput.addEventListener('keyup', (e) =>
	validateField(e.target, /^\d{2}\/\d{2}$/)
);

$cvvInput.addEventListener('keyup', (e) => validateField(e.target, /^\d{3}$/));

$addrInput.addEventListener('keyup', (e) => validateField(e.target, /.*\S.*/));

$nameInput.addEventListener('keypress', formatName);

$cardInput.addEventListener('keypress', formatCreditCard);

$dateInput.addEventListener('keypress', formatDate);

$cvvInput.addEventListener('keypress', formatCvv);
