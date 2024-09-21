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

function getSectionById(id){
    document.getElementById('add-money-div').classList.add('hidden');
    document.getElementById('cash-out-div').classList.add('hidden');
    document.getElementById('transaction-div').classList.add('hidden')
    document.getElementById('transfer-money-div').classList.add('hidden')

    // showing section
    document.getElementById(id).classList.remove('hidden')
}