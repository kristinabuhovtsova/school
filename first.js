

const menu = {
    'ЛАТТЕ': 100, 
    'БАНАНОВЫЙ КАПУЧИНО': 120, 
    'ВАНИЛЬНЫЙ РАФ': 110, 
    'АМЕРИКАНО': 90
  }
  
  function baristaAsk(){
    let cupOfCoffee = prompt('Что желаете?', '');
    console.log(cupOfCoffee)
    return cupOfCoffee
  }
  
  function baristaSay(coffee, charity, price) {
    console.log (coffee)
    console.log (charity)
    alert(price)
    if(Object.keys(menu).includes(coffee)) {
        alert(Object)
        alert(Object.keys(menu))
        alert(menu[coffe])
        return "Вы заказали" + coffe + "и сделали пожертвование.C вас" + menu[coffee] + "рублей"
      }
    else 
        return "Извините, ничем не могу помочь. Хорошего дня!"
   
  }
  
  function order(){
    const donation = '10';
    return baristaSay(baristaAsk())
        
  }
  console.log(order())

