
// ------------ PARA ANIMAR EL FORMULARIO-----------

let inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
      if(this.value.length>=1) {
         this.nextElementSibling.classList.add("fijar"); 
      } else{
        this.nextElementSibling.classList.remove("fijar");
      }
    })
}
    // -------------------fin-------------------



    // ----------------Gradientes----------------
    var granimInstance = new Granim({
      element: '#canvas-basic',
      name: 'basic-gradient',
      direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#AA076B', '#61045F'],
                  ['#02AAB0', '#00CDAC'],
                  ['#DA22FF', '#9733EE']
              ]
          }
      }
  });


/* ------------------------- FUNCIONA ANORMAL---------------------------------------*/

//   let writing = str => {
//       let arrFromStr = str.split("");
//       let i = 0;
//       let output = document.getElementById("output-container");
//       let printStr = setInterval(function(){
//        document.output += arrFromStr[i];
//        i++;
//        if (i === arrFromStr.length ) {
//             clearInterval(printStr);}
//       }, 400);
//   };
    
//   writing(" hola mundo");



/*----------------------------FUNCIONA--------->>typing<<-------------------------- */

  let i = 0;
  let text = " TU MESA GOURMENT COMO NUNCA, ";
   function typing(){
    if(i<text.length){
        document.getElementById("output-container").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 130);
    }
}
typing();