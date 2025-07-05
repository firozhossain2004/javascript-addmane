document.getElementById('show-dispaly-cashout').addEventListener('click',function(){
    console.log ('ok')
    document.getElementById('cashout-from').classList.remove('hidden');
    document.getElementById('cashin-from').classList.add('hidden');
})
document.getElementById('cashput-button').addEventListener('click',function(){
    console.log ('okasdd')
    document.getElementById('cashin-from').classList.remove('hidden');
    document.getElementById('cashout-from').classList.add('hidden');
})