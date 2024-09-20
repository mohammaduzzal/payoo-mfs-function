document.getElementById('add-money-btn')
.addEventListener('click', function(event){

    event.preventDefault();

    const addMoney = getInputFieldValueById('amount-input');
    const pinNumber = getInputFieldValueById('pin-input')

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('present-balance');
        const newBalance = balance + addMoney;
        document.getElementById('present-balance').innerText = newBalance
    }
    else{
        alert('wrong pin baby.think smarter.take rest and try again')
    }

})