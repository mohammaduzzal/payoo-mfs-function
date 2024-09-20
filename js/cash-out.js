document.getElementById('cash-out-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const amountCashInput = getInputFieldValueById('amount-cash-input');
    const pinCashInput = getInputFieldValueById('pin-cash-input');

    if(pinCashInput === 1234){
        const remainBalance = getTextFieldValueById('present-balance');
        const newBalanceRemain = remainBalance - amountCashInput
        document.getElementById('present-balance').innerText = newBalanceRemain

    }
    else{
        alert('wrong pin baby.think smarter.take rest and try again')
    }

})