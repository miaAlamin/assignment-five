
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
  
  let currentDate = new Date();
  let formattedDate = `${currentDate.toLocaleTimeString()} ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  allButtonId("noakhali-btn").addEventListener('click', function(){
 
    const noakhalibalance = allMoneyBDTId('noakhali-balance');
    let noakhaliinput = allInputValueId('noakhali-input');
    let top_bdt_amount = allMoneyBDTId('top-bdt-amount');
  
    let top_bdt_amountvalue = parseInt(top_bdt_amount.innerText);
    let noakhali_donate = parseInt(noakhalibalance.innerText);
    if(top_bdt_amount.innerText <= 0 || top_bdt_amount.innerText < noakhaliinput){
      alert('insuficent Balance')
      return
    }
    if( isNaN(noakhaliinput) || noakhaliinput <= 0){
      alert('Invalid Input')
      return;
    }else {
      alert('congratulation your donation successfull')
    };

  
    console.log( typeof top_bdt_amount.innerText)
    

    const courrentAmount = top_bdt_amountvalue - noakhaliinput;
    const courrentAmountnoakhali = noakhali_donate + noakhaliinput;
    top_bdt_amount.innerText = courrentAmount;
    noakhalibalance.innerText = courrentAmountnoakhali;


    const creatediv = document.createElement('div')
    creatediv.innerHTML = `
    
     <div  class="   mt-7 px-4 border-2 border-gray-300 rounded-md w-3/4 mx-auto py-3 h-16">
      <p>${noakhaliinput} Taka is Donated for famin-2024 at Noakhali, Bangladesh</p>
      <p>${formattedDate}</p>
      </div>
    `;
     

    allSectionId('notification').appendChild(creatediv);

    
  })

  allButtonId("feni-btn").addEventListener('click', function(){
 
    const fenibalance = allMoneyBDTId('feni-balance');
    let feniinput = allInputValueId('feni-input');
    let top_bdt_amount = allMoneyBDTId('top-bdt-amount');
  
    let top_bdt_amountvalue = parseInt(top_bdt_amount.innerText);
    let noakhali_donate = parseInt(fenibalance.innerText);
    if(top_bdt_amount.innerText <= 0 || top_bdt_amount.innerText < feniinput){
      alert('insuficent Balance')
      return
    }
    if( isNaN(feniinput) || feniinput <= 0){
      alert('Invalid Input')
      return;
    }else {
      alert('congratulation your donation successfull')
    };

  
    console.log( typeof top_bdt_amount.innerText)
    

    const courrentAmount = top_bdt_amountvalue - feniinput;
    const courrentAmountnoakhali = noakhali_donate + feniinput;
    top_bdt_amount.innerText = courrentAmount;
    fenibalance.innerText = courrentAmountnoakhali;


    const creatediv = document.createElement('div')
    creatediv.innerHTML = `
    
     <div  class="   mt-7 px-4 border-2 border-gray-300 rounded-md w-3/4 mx-auto py-3 h-16">
      <p>${feniinput} Taka is Donated for famin-2024 at Feni, Bangladesh</p>
      <p>${formattedDate}</p>
      </div>
    `;
     

    allSectionId('notification').appendChild(creatediv);

    
  })
  allButtonId("quota-btn").addEventListener('click', function(){
 
    const quotabalance = allMoneyBDTId('quota-balance');
    let quotainput = allInputValueId('quota-input');
    let top_bdt_amount = allMoneyBDTId('top-bdt-amount');
  
    let top_bdt_amountvalue = parseInt(top_bdt_amount.innerText);
    let noakhali_donate = parseInt(quotabalance.innerText);
    if(top_bdt_amount.innerText <= 0 || top_bdt_amount.innerText < quotainput){
      alert('insuficent Balance')
      return
    }
    if( isNaN(quotainput) || quotainput <= 0){
      alert('Invalid Input')
      return;
    }else {
      alert('congratulation your donation successfull')
    };

  
 
    

    const courrentAmount = top_bdt_amountvalue - quotainput;
    const courrentAmountnoakhali = noakhali_donate + quotainput;
    top_bdt_amount.innerText = courrentAmount;
    quotabalance.innerText = courrentAmountnoakhali;


    const creatediv = document.createElement('div')
    creatediv.innerHTML = `
    
     <div  class="   mt-7 px-4 border-2 border-gray-300 rounded-md w-3/4 mx-auto py-3 h-16">
      <p>${quotainput} Taka is Donated for famin-2024 at Quota, Bangladesh</p>
      <p>${formattedDate}</p>
      </div>
    `;
     

    allSectionId('notification').appendChild(creatediv);

    
  })


  allButtonId('History-btn').addEventListener('click', function(){
    allSectionId('card-box-area').classList.add('hidden')
    allButtonId('History-btn').classList.add('bg-[#B4F461]')
    allButtonId('Donation-btn').classList.remove('bg-[#B4F461]')

    // allButtonId('History-btn').classList.remove('outline-none')
    allSectionId('notification').classList.remove('hidden');
  })

  allButtonId('Donation-btn').addEventListener('click', function(){
    allSectionId('card-box-area').classList.remove('hidden')
    allButtonId('History-btn').classList.remove('bg-[#B4F461]')
    allButtonId('Donation-btn').classList.add('bg-[#B4F461]')
    allSectionId('notification').classList.add('hidden');
   
  })
  
