import { $submitBtn } from './selectors.js';

function validateField(field, regex) {
	regex.test(field.value)
		? (field.className = 'is-completed')
		: (field.className = 'is-wrong');

	handleSubmit();
}

function formatName(e) {
	if (/[0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]/.test(e.key)) {
		e.preventDefault();
	}
}

function formatCreditCard(e) {
	const inputValue = e.target.value.replace(/\s+/g, '');

	if (/(^\d{1,15}|^)$/.test(inputValue) && /\d/.test(e.key)) {
		if (inputValue.length > 0) {
			e.target.value = inputValue.match(/\d{1,4}/g).join(' ');
		}
	} else {
		e.preventDefault();
	}
}

function formatDate(e) {
	const inputValue = e.target.value.replace(/\//g, '');

	if (/(^\d{1,3}|^)$/.test(inputValue) && /\d/.test(e.key)) {
		if (inputValue.length > 0) {
			e.target.value = inputValue.match(/\d{1,2}/g).join('/');
		}
	} else {
		e.preventDefault();
	}
}

function formatCvv(e) {
	const inputValue = e.target.value;

	if (!/(^\d{1,2}|^)$/.test(inputValue) || !/\d/.test(e.key)) {
		e.preventDefault();
	}
}

function handleSubmit() {
	document.querySelectorAll('.is-completed').length == 5
		? ($submitBtn.disabled = false)
		: ($submitBtn.disabled = true);
}

export { validateField, formatCreditCard, formatDate, formatCvv, formatName };
