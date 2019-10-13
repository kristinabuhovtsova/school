/**
* Магия DOM.
* Пора попробовать себя в роли иллюзиониста. При клике на кнопку "Телепорт",
* Джем телепортируется и пропадает из DOM, мячик при этом грустно падает
* и приобретает class .bouncing. При нажатии на кнопку "Невидимка", Джем остается
* на месте, но становится невидимой. Мячик остается на её голове.
* Разрешается добавить id один раз.
*
*/
window.addEventListener("load", function(event) {
  const buttonTel = document.querySelector('.button.wrapper').childNodes[1];
  const buttonInv = document.querySelector('.button.wrapper').childNodes[3];
  
  const girl = document.querySelector('.wrapper.girl');
  const ball = document.getElementById('ball');  
    
  buttonTel.addEventListener("click", function(){
    
    if(girl.style.display==='none') {
       girl.style.display = 'block';
      ball.classList.remove('bouncing')
    } else {
    girl.style.display = 'none';
    ball.classList.add('bouncing')
    }
  })
  
  buttonInv.addEventListener("click", function(){
    if (girl.style.visibility === 'hidden') {
        girl.style.visibility = '';
    }  else girl.style.visibility = 'hidden'
  })
  })


