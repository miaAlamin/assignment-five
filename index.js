
tailwind.config = {
    theme: {
      extend: {
        colors: {
          btn_prymary: '#B4F461',
        },

        fontFamily: { 
            lexend: [ "Lexend", "sans-serif"] 
        }
      }
    }
  }








  function allSectionId(id){
    const allSection = document.getElementById(id);
    return allSection;
  }

  function allButtonId(id){
    const allButton = document.getElementById(id);
    return allButton;
  }

  function allMoneyBDTId(id){
    const allBDT = document.getElementById(id)
    return allBDT;
  }

  function allInputValueId(id){
    const inputValue = parseInt(document.getElementById(id).value)
    return inputValue;
  }
  

  allButtonId('bar-btn').addEventListener('click', function(){
    
    allSectionId('dowar').classList.toggle('hidden');
   

  });
  

  allButtonId("noakhali-btn").addEventListener('click', function(){
 
    const noakhalibalance = allMoneyBDTId('noakhali-balance');
    let noakhaliinput = allInputValueId('noakhali-input');
    let top_bdt_amount = allMoneyBDTId('top-bdt-amount');

    let top_bdt_amountvalue = parseInt(top_bdt_amount.innerText);
    let noakhali_donate = parseInt(noakhalibalance.innerText);
    
    if( isNaN(noakhaliinput)){
      alert('Invalid Input')
    }else{
      alert('congratulation your donation successfull')
    }
    

    const courrentAmount = top_bdt_amountvalue - noakhaliinput;
    const courrentAmountnoakhali = noakhali_donate + noakhaliinput;
    top_bdt_amount.innerText = courrentAmount;
    noakhalibalance.innerText = courrentAmountnoakhali;
    
  })

  
