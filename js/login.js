document.getElementById("login-btn").addEventListener("click", function (e) {
  const inputPhon = document.getElementById("input-phone").value;
  const pinNumber = document.getElementById("input-pin").value;
  if(inputPhon==='5' && pinNumber==='1234'){
    console.log("Go now")
    window.location.href ='http://127.0.0.1:5500/2inedex.html'
  }
  else{
   alert('wrong Number or pin');
  }
});
