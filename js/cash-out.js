document.getElementById('cash-out-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const amountCashInput = getInputFieldValueById('amount-cash-input');
    const pinCashInput = getInputFieldValueById('pin-cash-input');


    if(isNaN(amountCashInput)){
        alert('we only understand money baby')
        return;
    }

    if(pinCashInput === 1234){
        const remainBalance = getTextFieldValueById('present-balance');


        if(amountCashInput > remainBalance){
            alert('you dont have enough money baby')
            return;
        }
        const newBalanceRemain = remainBalance - amountCashInput
        document.getElementById('present-balance').innerText = newBalanceRemain

        // add to the transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="font-bold text-2xl">Cash Out</h4>
         <p>${amountCashInput} tk withdraw. new balance ${newBalanceRemain}</p>
        `
        document.getElementById('transaction-container').appendChild(div)

    }
    else{
        alert('wrong pin baby.think smarter.take rest and try again')
    }

})