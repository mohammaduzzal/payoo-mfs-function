function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);
    return textNumber;
}


function getTextFieldValueById2(id){
    const innerText = document.getElementById(id);
    const  selectedText = innerText.options[innerText.selectedIndex].value
    return selectedText;
}

function getSectionById(id){
    document.getElementById('add-money-div').classList.add('hidden');
    document.getElementById('cash-out-div').classList.add('hidden');
    document.getElementById('transaction-div').classList.add('hidden')
    document.getElementById('transfer-money-div').classList.add('hidden')
    document.getElementById('pay-bill-div').classList.add('hidden')
    document.getElementById('coupon-div').classList.add('hidden')

    // showing section
    document.getElementById(id).classList.remove('hidden')
}