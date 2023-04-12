let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenval = '';
for(item of buttons)
{
  item.addEventListener('click',(e)=>{
      buttontext = e.target.innerText;
      if(buttontext == 'x'){
          buttontext = '*';
          screenval += buttontext;
          screen.value = screenval;
      }
    
      else if(buttontext == 'C'){
        screenval = "";
        screen.value = screenval;
      }
    
      else if(buttontext == '='){
          screen.value = eval(screenval);
      }

      else{
        screenval += buttontext;
        screen.value = screenval;
      }
  });  
}