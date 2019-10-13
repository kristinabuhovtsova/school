/**
 * Обучаам баристу инвентаризации.
 * Делается заказ, бариста проверяет, есть ли в меню такие кофе и печенье, 
 * сверяется с рецептом, смотрит наличие ингредиентов
 * и готовит заказ / извиняется и дозаказывает ингредиенты
 */

const recipes = {
  'банановый латте': ['банановый сироп', 'молоко', 'кофе'],
  'черничный капучино': ['черничный сироп', 'молоко', 'кофе'],
  'баунти раф': ['раф-основа', 'кокосовое молоко', 'розовая соль'],
  'американо': ['кофе']
}

const cookies = ['шоколадное', 'овсяное', 'мятное', 'малиновое']

const box = {
  'банановый сироп': 2,
  'черничный сироп': 0,
  'молоко': 10,
  'кофе': 10,
  'раф-основа': 3, 
  'кокосовое молоко': 0, 
  'розовая соль': 1
}

function checkOrderItem(coffee, cookie) {
    alert("1")
    if ((Object.keys(recipes).includes(coffee)) && (Object.keys(cookies).includes(cookie))) {
      return 3
    }
    else if (Object.keys(recipes).includes(coffee)) {
        return 2
    }
    else if (Object.keys(cookies).includes(cookie)) {
        return 1
    }
    else {
        return 0
    }
}

function checkIngredients(coffee){
    alert("2")
    flag=1
    recipes[coffee].forEach(function(item, i,arr) {
      if  (box[item]===0) {
        flag=0
      }
     });
    return flag
}

function order(coffee, cookie) {
  alert("3")
 
 const dictionary = {
    allOk:`Вот ваш заказ: ${coffee} и ${cookie} печенье! Хорошего дня!`,
    allNotOk:`Мы не можем обработать ваш заказ, извините.`,
    noCookie:`К сожалению, у нас нет такого печенья. Вот ваш ${coffee}`,
    noCoffee:`К сожалению, сейчас не можем приготовить ${coffee}. Вот ваше ${cookie} печенье`, 
 }
 
 if (checkOrderItem(coffee, cookie)===3) {
   if (checkIngredients(coffee)) {
    recipes[coffee].forEach(function(item, i,arr) {
        (box[item]--) 
    });
     alert(allOk)
   }
     else {
       alert("Сейчас не можем сделать")
       alert("Памятка")
    }
}
else {
     alert("К сожалению, нет в меню.")
   }
     
 
  alert('-----Следующий заказ-----')
}
alert(0)
order('американо')
order('баунти раф')
order('банановый латте')
order('баунти раф')
