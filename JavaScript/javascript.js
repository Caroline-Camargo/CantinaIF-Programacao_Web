var teste;

/* INDEX*/

/* mudar imagem quando o mouse passa por cima*/
function trocaImg(enderecoImg, id) {
    document.getElementById(id).src = "imagens/" + enderecoImg;
}

function mudaCorBorda1(id){
    document.getElementById(id).style.borderColor = "#FFD700";
}
function mudaCorBorda2(id){
    document.getElementById(id).style.borderColor = "white";
}
function mudaCorBorda3(id){
    document.getElementById(id).style.borderColor = "C42A22";
}

/* quando clicar vai fazer um teste para saber qual é a div que vai ser deixada aberta na página dos lanches
 * não deu certo :(     */
function saberOclick(id) {
    if (id == "divlanches") {
        teste = "lanches";
    } else if (id == "divbebidas") {
        teste = "bebidas";
    } else {
        teste = "doces";
    }
}


/* LANCHES*/

/* mostrar e fazer sumir uma div*/
function mostrar(id) {
    if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "block";
    } else {
        document.getElementById(id).style.display = "none";
    }
}

/* alterar a cor */
function mudaCorLetra1(id){
    document.getElementById(id).style.color = "#FFD700";
}
function mudaCorLetra2(id){
    document.getElementById(id).style.color = "#C42A22";
}


/* CADASTRO*/

/* teste para ver se as duas senhas digitadas são as mesmas*/
function testeSenha() {
    var testandoSenha1 = document.getElementById('senha1').value;
    var testandoSenha2 = document.getElementById('senha2').value;
    if (testandoSenha1 === testandoSenha2) {
        senhaUsuario = testandoSenha1;
        return senhaValida();
    } else {
        alert("DIGITE DUAS SENHAS IGUAIS");
        mudaCor1();
        mudaCor2();
        return false;
    }
}
function senhaValida() {
    p = document.getElementById('senha1').value;
    if (p.length != 8) {
        alert("digite uma senha de 8 caracteres");
        return false;
    } else {
        return true;

    }
}

/* alterar a cor */
function mudaCor1() {
    elemento = document.getElementById('senha1');
    elemento.style.border = "2px solid  yellow";
}
function mudaCor2() {
    elemento = document.getElementById('senha2');
    elemento.style.border = "2px solid  yellow";
}

/* alterar a cor */
function mudaCorBotao1(id) {
    elemento = document.getElementById(id);
    elemento.style.background = "#FFD700";
    elemento.style.color = "black";
}
function mudaCorBotao2(id) {
    elemento = document.getElementById(id);
    elemento.style.background = "black";
    elemento.style.color = "#FFD700";
}


/* DIVIDAS*/
function mensagemenviada() {
    alert("Sua Mensagem Foi Enviada Com Sucesso");
}


/* DESENVOLVEDORES*/
function CorLetra(id){
    document.getElementById(id).style.color = "black";
}
function CorLetra2(id){
    document.getElementById(id).style.color = "#C42A22";
}

     