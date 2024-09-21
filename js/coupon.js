document.getElementById('coupon-btn').addEventListener('click', function(event){
    event.preventDefault();
   const couponInput = document.getElementById('coupon-input').value;

   if(couponInput === 'ph10'){
    const balance =getTextFieldValueById('present-balance');
    const newAdd = balance + 100;
    document.getElementById('present-balance').innerText = newAdd;

    // transaction history
    const p = document.createElement('p')
    p.classList.add('bg-pink-300')
    p.innerText = `got offer:${100}tk  new balance:${newAdd}`
    document.getElementById('transaction-container').appendChild(p)
   }
   else if(couponInput === 'bibo bibo10'){
    const balance =getTextFieldValueById('present-balance');
    const newAdd1 = balance + 200
    document.getElementById('present-balance').innerText = newAdd1

    // transaction history
    const p = document.createElement('p')
    p.classList.add('bg-pink-300')
    p.innerText = `got offer:${200}tk  new balance:${newAdd1}`
    document.getElementById('transaction-container').appendChild(p)

   }
   else{
    alert('sorry dear.you dont have any coupon')
   }
  
})