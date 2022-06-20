


const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "talves sim" ,     
    "quem sabe",    
    "talves",   
    "sem resposta",  
    "um dia quem sabe", 
    "otro dia",               
    "nunca",              
    "com certeza",             
    "acho que sim",            
]     

  
//numeros aleatoreos

//clicar em fazer pergunta

function fazerPergunta() {

if(inputPergunta.value == "") {
    alert("digite sua pergunta")
}

const pergunta = "<div>" + inputPergunta.value + "</div>"
    

    //gerar numero aleatorio
    //crio uma const que recebera a const respostas
 const totalRespostas = respostas.length
 const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 
 elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

 elementoResposta.style.opacity = 1;

 //sumir resposta depois de 3s

 setTimeout(function() {
   

    elementoResposta.style.opacity = 0;
 }, 3000)

 } 
     
 
 
 
 
 
 
 
    
              





 















