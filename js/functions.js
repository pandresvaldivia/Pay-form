function validateField(field, regex) {
	regex.test(field.value)
		? (field.className = 'is-completed')
		: (field.className = 'is-wrong');
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

export { validateField, formatCreditCard };
