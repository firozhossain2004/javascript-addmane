document.getElementById('button-add').addEventListener('click',function(event){
    event.preventDefault;
  const inputAcount = document.getElementById('input-account').value;
   const inputPin= document.getElementById('input-pin').value;
   if(inputPin ==='2345'){
    console.log ("add many")
    const accunountBalance = document.getElementById('account-balance').innerText;
    const numberBlance = parseFloat(accunountBalance);
    const numberAccount = parseFloat(inputAcount);
    const totalMany = numberAccount+numberBlance;
    document.getElementById('account-balance').innerText=totalMany;

   }
   else{
    alert('worng number')
   }
})