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
    }
})