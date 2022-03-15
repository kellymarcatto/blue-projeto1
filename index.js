console.clear();
const prompt = require(`prompt-sync`)();

let resposta;
let pontos = 0;

if (resposta == "sim"){
        pontos++
} else {}

console.log(`Clara Liz, é uma linda menina que morava em uma bela casa com a sua mãe e sempre usava 
uma capa e um pequeno chapéu na cor vermelha. \nSua mãe pediu para que levasse uma cesta de doces para 
sua vovó e pediu que ela evitasse o caminho da floresta, pois ele é muito perigoso. \nA menina distraída com as flores entrou na floresta e enquanto ela seguia, o lobo rapidamente seguiu pelo caminho do bosque, cantando e correndo. Mas como o lobo, era muito rápido, chegou primeiro e foi entrando na casa da vovozinha de uma só vez e engoliu a vovozinha. \nChegando na casa da vovó, a menina encontrou o lobo e perguntou da vovozinha, o lobo logo começou a correr atrás da Chapeuzinho. \nDepois de algum tempo, o lobo tropeçou e caiu no chão. \nEscutando a Chapeuzinho pedir socorro o caçador que passava em frente a casa da vovozinha, entrou e aproveitando que o lobo estava dormindo, cortaram a sua a barriga e tiraram a vovozinha de dentro. \nChapeuzinho e a vovó se abraçaram muito felizes.\n`);

const pergunta1 = prompt('Você usaria uma capa vermelha?\t').toLowerCase();
if (pergunta1 == "sim"){
pontos++
}
const pergunta2 = prompt('Você iria sozinho(a) para a casa da Vovozinha?\t').toLowerCase();
if (pergunta2 == "sim"){
pontos++
}
const pergunta3= prompt('Você iria pela floresta?\t').toLowerCase();
if (pergunta3 == "sim"){
pontos++
}
const pergunta4 = prompt('Você teria medo do Lobo Mal?\t').toLowerCase();
if (pergunta4 == "sim"){
pontos++
}
const pergunta5= prompt('Você ficou feliz com o final da história?\t').toLowerCase();
if (pergunta5 == "sim"){
pontos++
}




//encerro com esse bloco 
if (pontos == 0) {
    console.log(`Você falha miserávelmente`);
} else if (pontos == 1 || pontos == 2) { 
    console.log(`Você falha mas consegue fugir da situação`);
} else if (pontos == 3) {
    console.log(`Você chega perto de conseguir alcançar seu objetivo, embora não de maneira perfeita`);
} else if (pontos == 4) {
    console.log(`Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita`);
} else if (pontos == 5) {
        console.log(`Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações`);
        }        


