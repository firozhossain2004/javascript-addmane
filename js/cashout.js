document
  .getElementById("button-add-cashout")
  .addEventListener("click", function (event) {
    event.preventDefault;

    const inputCashoutAccount = document.getElementById(
      "input-cashout-account"
    ).value;
    const inputCashoutpPin = document.getElementById("cashout-pin").value;
    console.log(inputCashoutAccount, inputCashoutpPin);
    if (inputCashoutpPin === "2222") {
      const totalBlance = document.getElementById(
        "totalaccount-balance"
      ).innerText;

      const crentbalanc = parseFloat(totalBlance);
      const crentInputCashoutpPin = parseFloat(inputCashoutAccount);
      const mainBalince = crentbalanc - crentInputCashoutpPin;
      document.getElementById("totalaccount-balance").innerText = mainBalince;
    } else {
      alert("incaret number & pin");
    }
  });
