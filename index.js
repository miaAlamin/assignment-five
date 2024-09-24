
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

  allButtonId('bar-btn').addEventListener('click', function(){
    
    allSectionId('dowar').classList.toggle('hidden');
   

  })

  
