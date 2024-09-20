document.getElementById('add-money-btn')
.addEventListener('click', function(event){

    event.preventDefault();

    const addMoney = getInputFieldValueById('amount-input');
    const pinNumber = getInputFieldValueById('pin-input')


    if(isNaN(addMoney)){
        alert('failed to add money')
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('present-balance');
        const newBalance = balance + addMoney;
        document.getElementById('present-balance').innerText = newBalance

        // add to the transaction history
        const p = document.createElement('p')
        p.innerText = `Added: ${addMoney} tk. New Balance: ${newBalance}`

        // common function would good for appendChild
        document.getElementById('transaction-container').appendChild(p)


    }
    else{
        alert('wrong pin baby.think smarter.take rest and try again')
    }

})