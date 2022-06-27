let sample = "ABCDEF"
let gradient = "";

let generate_gradients=(color)=>{

    for (let num = 1; num <= 3; num++) {
        // Для каждой из 3 областей генерируем рандомный цвет 
        let choice = Math.floor(Math.random()*2);
        while (gradient.length < 6) {
          switch(choice){
            case 0:
              gradient += Math.floor(Math.random() * 10);
           case 1:
            gradient+= sample[Math.floor(Math.random() * sample.length)];
         }
        }
       // Создаем градиент из первоначального цвета и сгенерированного
       $('.gradient_declarator_2').html(`#${color}`);
       $('.gradient_declarator_2').css("color", `${ $(".color_declarator").css("color") }`) ;
       $(`#gradient_${num}`).children(".gradient_declarator_1").html(`#${gradient}`);
       $(`#gradient_${num}`).css("background",`linear-gradient(to right,#${color},#${gradient})`);

       if(!isNaN(gradient[0])){
        $(`#gradient_${num}`).children(".gradient_declarator_1").css("color","white");    
       }
       else{
        $(`#gradient_${num}`).children(".gradient_declarator_1").css("color","black");
       }
   
       gradient="";
    }


}

export default generate_gradients;
