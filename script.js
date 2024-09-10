document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;

    fetch('https://api.crypt.bot/v1/invoices', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '261797:AA9uf25xwOcQiGBdKCgNA0YTGy0sWlwcSV9'
        },
        body: JSON.stringify({
            amount: amount,
            currency: 'BTC'
        })
    })
    .then(response => response.json())
    .then(data => {
        const invoiceLink = document.getElementById('invoiceLink');
        invoiceLink.innerHTML = `<a href="${data.result.pay_url}" target="_blank">Оплатить</a>`;
    })
    .catch(error => console.error('Error:', error));
});
