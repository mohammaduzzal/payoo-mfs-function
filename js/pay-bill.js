document.getElementById('pay-btn').addEventListener('click', function(event){
    event.preventDefault();
    const selectBank = getTextFieldValueById2('select-bank')
    const accountNumber = getInputFieldValueById('account-number')
    const payAmount = getInputFieldValueById('pay-amount')
    const payPinInput = getInputFieldValueById('pay-pin-input')
   if(isNaN(payAmount)){
    alert('sorry love.try harder')
    return
   }

   if(payPinInput === 1234){
    const balance1 = getTextFieldValueById('present-balance');
    if(payAmount> balance1){
        alert('if you dont want to eat kick then add enough money')
        return;
    }

    const newBalance1 = balance1 - payAmount
    document.getElementById('present-balance').innerText = newBalance1


    // add to the transaction history
    const p = document.createElement('p')
    p.innerText = `pay bill:${payAmount}tk. account no:${accountNumber} balance:${newBalance1}`
    p.classList.add('bg-gray-300')
    document.getElementById('transaction-container').appendChild(p)


   }
   else{
    alert('mor jeye vagare')
   }




})