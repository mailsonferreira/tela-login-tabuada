/* 
Exercicio de tabuada, curso Hcode.
*/

function calculaTabuada (){

    // Valor do tbody da tabela
let tabuada = document.querySelector('#tabuada tbody')
   //Valor A do campo input e convertendo em numero
let valorA =    Number(document.querySelector('#valorA').value)

//Limpando o conteúdo do tbody
tabuada.innerHTML = ''

//Laço de repetição de 0 a 10
for( let valorB = 0; valorB <=10;valorB++ ) {
    
    let resultado = valorA*valorB
   
    let templete =`

<td>${valorA}</td>
<td>X</td>
<td>${valorB}</td>
<td>=</td>
<td>${resultado}</td>

` 

let tr = document.createElement('tr') // Crinando o elemento tr
tr.innerHTML = templete // Inserindo as colinas na linha

tabuada.append(tr) // Inserindo a linha na tebela

   } // fechamento do for

} // fechamento da função

calculaTabuada() // chamando a função pela primeira vez

// Add o evento de alteração ao campo número
document.querySelector('#valorA').addEventListener('change' , calculaTabuada)