document.getElementById('sent-btn').addEventListener('click', function(event){
    event.preventDefault();
    const numberInput = getInputFieldValueById('number-input')
    const transferAmountInput = getInputFieldValueById('transfer-amount-input')
    const transferPinInput = getInputFieldValueById('transfer-pin-input')
    if(isNaN(transferAmountInput)){
        alert('we only transfer money baby')
        return;
    }

    if(transferPinInput === 1234){
        const balance = getTextFieldValueById('present-balance')
        if(transferAmountInput>balance){
            alert('you dont have enough money love')
            return;
        }

        const newBalance = balance - transferAmountInput
        document.getElementById('present-balance').innerText = newBalance


        // transaction history
        const p = document.createElement('p')
        p.classList.add('bg-pink-300')
        p.innerText = `sent: ${transferAmountInput} tk. new balance:${newBalance}`
        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('wrong pin baby.try harder love')
    }
})