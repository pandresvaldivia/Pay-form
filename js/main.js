import { $nameInput, $cardInput } from './selectors.js';
import { validateField, formatCreditCard } from './functions.js';

$nameInput.addEventListener('keyup', (e) =>
	validateField(e.target, /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g)
);

$cardInput.addEventListener('keyup', (e) =>
	validateField(e.target, /^(\d{4}\s){3}\d{4}|\d{16}$/)
);

$cardInput.addEventListener('keypress', formatCreditCard);
