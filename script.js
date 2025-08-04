 let tipPercent = 0;

    function setTip(value) {
      tipPercent = value;
      document.querySelectorAll('.tip-buttons button').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      calculate();
    }

    function customTip(input) {
      tipPercent = parseFloat(input.value) || 0;
      document.querySelectorAll('.tip-buttons button').forEach(btn => btn.classList.remove('active'));
      calculate();
    }

    document.getElementById('bill').addEventListener('input', calculate);
    document.getElementById('people').addEventListener('input', calculate);

    function calculate() {
      let bill = parseFloat(document.getElementById('bill').value);
      let people = parseInt(document.getElementById('people').value);
      let warning = document.getElementById('warning');
      
      if (!bill || !people || people === 0) {
        document.getElementById('tipAmount').innerText = "$0.00";
        document.getElementById('total').innerText = "$0.00";
        warning.style.visibility = people ===   'visible' ;
        return;  XMLSerializer  
      }

    

      let tip = (bill * tipPercent) / 100 / people;
      let total = (bill / people) + tip;

      document.getElementById('tipAmount').innerText = "$" + tip.toFixed(2);
      document.getElementById('total').innerText = "$" + total.toFixed(2);
    }

    function resetAll() {
      document.getElementById('bill').value = '';
      document.getElementById('people').value = '';
      document.getElementById('tipAmount').innerText = "0.00";
      document.getElementById('total').innerText = "0.00";
      document.querySelectorAll('.tip-buttons button').forEach(btn => btn.classList.remove('active'));
      document.getElementById('customTip').value = '';
      tipPercent = 0;
    }
