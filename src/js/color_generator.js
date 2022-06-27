import generate_gradients from './gradients_generator.js';

let sample = "ABCDEF"
let color = "";

let generate_color = () => {

// Рандомно добавляем в hex код либо букву, либо цифру, до получения 6-значного кода 
let choice = Math.floor(Math.random()*2);
while (color.length < 6) {
  switch(choice){
    case 0:
      color += Math.floor(Math.random() * 10);
   case 1:
    color+= sample[Math.floor(Math.random() * sample.length)];
 }
}
// Выводим цвет и его hex код
$('#generated_field').css( "background-color",`#${color}`);
$('.color_declarator').html(`#${color}`);

// Для кодов, начинающихся с цифры, делаем название белым, тк эти цвета темные
if(!isNaN(color[0])){
    $('.color_declarator').css("color","white");    
}
else{
  $('.color_declarator').css("color","black");
}

generate_gradients(color);
color="";
}



export default generate_color;



