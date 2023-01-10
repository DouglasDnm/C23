
function ativarAlura() {
    var aparecerNaTela = "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Cursos</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>HTML &<br>CSS</p></section><section class='box-items-02'><form name='linha01HC01'><input type='text' class='input-menu-02' name='AHC01' id='AHC01'></form><button onclick='salvar01HC(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01HC02'><input type='text' class='input-menu-02' name='AHC02' id='AHC02'></form><button onclick='salvar02HC(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01HC03'><input type='text' class='input-menu-02' name='AHC03' id='AHC03'></form><button onclick='salvar03HC(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><div class='items-menu-02'>-</div></section><section class='box-items-02'><div class='items-menu-02'>-</div></section><section class='box-items-02'><div class='items-menu-02'>-</div></section><section class='box-items-02'><div class='items-menu-02'>-</div></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>JavaScript</p></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha02JS01'><input type='text' class='input-menu-02' name='AJS01' id='AJS01'></form><button onclick='salvar01JS(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02JS02'><input type='text' class='input-menu-02' name='aluraJS02' id='aluraJS02'></form><button onclick='salvar02JS(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02JS03'><input type='text' class='input-menu-02' name='aluraJS03' id='aluraJS03'></form><button onclick='salvar03JS(); exibir()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02JS04'><input type='text' class='input-menu-02' name='aluraJS04' id='aluraJS04'></form><button onclick='salvar04JS(); exibir()' class='botao-salvar'>Salvar</button></section></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaHC' id='mediaHC'></section><section class='mediaJS' id='mediaJS'></section><button onclick='salvarTodos()' class='botao-todos'>Salvar</button><section class='mediaTotal' id='mediaTotal'></section></div></section>"
    var imprimir = document.getElementById("imprimirAlura")
    imprimir.innerHTML = aparecerNaTela
}

function desativarAlura() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirAlura")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodos() {
    salvar01HC()
    salvar02HC()
    salvar03HC()
    salvar01JS()
    salvar02JS()
    salvar03JS()
    salvar04JS()

    exibir()
}

function salvar01HC() {
    localStorage.setItem("tabeladia01HC", document.linha01HC01.AHC01.value)
}

function salvar02HC() {
    localStorage.setItem("tabeladia02HC", document.linha01HC02.AHC02.value)
}

function salvar03HC() {
    localStorage.setItem("tabeladia03HC", document.linha01HC03.AHC03.value)
}

function salvar01JS() {
    localStorage.setItem("tabeladia01JS", document.linha02JS01.AJS01.value)
}

function salvar02JS() {
    localStorage.setItem("tabeladia02JS", document.linha02JS02.AJS02.value)
}

function salvar03JS() {
    localStorage.setItem("tabeladia03JS", document.linha02JS03.AJS03.value)
}

function salvar04JS() {
    localStorage.setItem("tabeladia04JS", document.linha02JS04.AJS04.value)
}


function exibir() {

    var valorHC01 = parseInt(localStorage.getItem("tabeladia01HC"));
    var valorHC02 = parseInt(localStorage.getItem("tabeladia02HC"));
    var valorHC03 = parseInt(localStorage.getItem("tabeladia03HC"));

    var valorHCFinal = ((valorHC01 + valorHC02 + valorHC03) / 3).toFixed(1)

    imprimirHC(valorHCFinal);

    var valorJS01 = parseInt(localStorage.getItem("tabeladia01JS"));
    var valorJS02 = parseInt(localStorage.getItem("tabeladia02JS"));
    var valorJS03 = parseInt(localStorage.getItem("tabeladia03JS"));
    var valorJS04 = parseInt(localStorage.getItem("tabeladia04JS"));

    var valorJSFinal = ((valorJS01 + valorJS02 + valorJS03 + valorJS04) / 4).toFixed(1)

    imprimirJS(valorJSFinal);

    var valorMediaFinal = ((valorHC01 + valorHC02 + valorHC03 + valorJS01 + valorJS02 + valorJS03 + valorJS04) / 7).toFixed(1)

    imprimirMediaTotal(valorMediaFinal);
}

function imprimirHC(valorHCFinal) {
    var imprimirHCTexto = "HTML & CSS: " + valorHCFinal + "%"
    var localExibirHC = document.getElementById("mediaHC")
    localExibirHC.innerHTML = imprimirHCTexto
}

function imprimirJS(valorJSFinal) {
    var imprimirJSTexto = "JavaScript: " + valorJSFinal + "%"
    var localExibirJS = document.getElementById("mediaJS")
    localExibirJS.innerHTML = imprimirJSTexto
}

function imprimirMediaTotal(valorMediaFinal) {
    var imprimirMediaTexto = "Média Final: " + valorMediaFinal + "%"
    var localExibirMedia = document.getElementById("mediaTotal")
    localExibirMedia.innerHTML = imprimirMediaTexto
}


function ativarAtividadesFisicas() {
    var aparecerNaTela = "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Atividades</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div ><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>Bicicleta</p></section><section class='box-items-02'><form name='linha01BI01'><input type='text' class='input-menu-02' name='ABI01' id='ABI01'></form><button onclick='salvar01BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI02'><input type='text' class='input-menu-02' name='ABI02' id='ABI02'></form><button onclick='salvar02BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI03'><input type='text' class='input-menu-02' name='ABI03' id='ABI03'></form><button onclick='salvar03BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI04'><input type='text' class='input-menu-02' name='ABI04' id='ABI04'></form><button onclick='salvar04BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI05'><input type='text' class='input-menu-02' name='ABI05' id='ABI05'></form><button onclick='salvar05BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI06'><input type='text' class='input-menu-02' name='ABI06' id='ABI06'></form><button onclick='salvar06BI(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01BI07'><input type='text' class='input-menu-02' name='ABI07' id='ABI07'></form><button onclick='salvar07BI(); exibirAF()' class='botao-salvar'>Salvar</button></section>           </div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Caminhada</p></section><section class='box-items-03'><form name='linha02CA01'><input type='text' class='input-menu-02' name='ACA01' id='ACA01'></form><button onclick='salvar01CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA02'><input type='text' class='input-menu-02' name='ACA02' id='ACA02'></form><button onclick='salvar02CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA03'><input type='text' class='input-menu-02' name='ACA03' id='ACA03'></form><button onclick='salvar03CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA04'><input type='text' class='input-menu-02' name='ACA04' id='ACA04'></form><button onclick='salvar04CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA05'><input type='text' class='input-menu-02' name='ACA05' id='ACA05'></form><button onclick='salvar05CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA06'><input type='text' class='input-menu-02' name='ACA06' id='ACA06'></form><button onclick='salvar06CA(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02CA07'><input type='text' class='input-menu-02' name='ACA07' id='ACA07'></form><button onclick='salvar07CA(); exibirAF()' class='botao-salvar'>Salvar</button></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Exercícios Fisícos</p></section><section class='box-items-03'><form name='linha03EX01'><input type='text' class='input-menu-02' name='AEX01' id='AEX01'></form><button onclick='salvar01EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX02'><input type='text' class='input-menu-02' name='AEX02' id='AEX02'></form><button onclick='salvar02EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX03'><input type='text' class='input-menu-02' name='AEX03' id='AEX03'></form><button onclick='salvar03EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX04'><input type='text' class='input-menu-02' name='AEX04' id='AEX04'></form><button onclick='salvar04EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX05'><input type='text' class='input-menu-02' name='AEX05' id='AEX05'></form><button onclick='salvar05EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX06'><input type='text' class='input-menu-02' name='AEX06' id='AEX06'></form><button onclick='salvar06EX(); exibirAF()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha03EX07'><input type='text' class='input-menu-02' name='AEX07' id='AEX07'></form><button onclick='salvar07EX(); exibirAF()' class='botao-salvar'>Salvar</button></section></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaHC' id='mediaBI'></section><section class='mediaJS' id='mediaCA'></section> <section class='mediaEX' id='mediaEX'></section>  <button onclick='salvarTodosAF()'class='botao-todos'>Salvar</button><section class='mediaTotal' id='mediaTotalAF'></section></div></section>"
    var imprimir = document.getElementById("imprimirAtividadesFisicas")
    imprimir.innerHTML = aparecerNaTela
}

function desativarAtividadesFisicas() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirAtividadesFisicas")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodosAF() {
    salvar01BI()
    salvar02BI()
    salvar03BI()
    salvar04BI()
    salvar05BI()
    salvar06BI()
    salvar07BI()

    salvar01CA()
    salvar02CA()
    salvar03CA()
    salvar04CA()
    salvar05CA()
    salvar06CA()
    salvar07CA()

    salvar01EX()
    salvar02EX()
    salvar03EX()
    salvar04EX()
    salvar05EX()
    salvar06EX()
    salvar07EX()

    exibirAF()
}

function salvar01BI() {
    localStorage.setItem("tabeladia01BI", document.linha01BI01.ABI01.value)
}

function salvar02BI() {
    localStorage.setItem("tabeladia02BI", document.linha01BI02.ABI02.value)
}

function salvar03BI() {
    localStorage.setItem("tabeladia03BI", document.linha01BI03.ABI03.value)
}

function salvar04BI() {
    localStorage.setItem("tabeladia04BI", document.linha01BI04.ABI04.value)
}

function salvar05BI() {
    localStorage.setItem("tabeladia05BI", document.linha01BI05.ABI05.value)
}

function salvar06BI() {
    localStorage.setItem("tabeladia06BI", document.linha01BI06.ABI06.value)
}

function salvar07BI() {
    localStorage.setItem("tabeladia07BI", document.linha01BI07.ABI07.value)
}

function salvar01CA() {
    localStorage.setItem("tabeladia01CA", document.linha02CA01.ACA01.value)
}

function salvar02CA() {
    localStorage.setItem("tabeladia02CA", document.linha02CA02.ACA02.value)
}

function salvar03CA() {
    localStorage.setItem("tabeladia03CA", document.linha02CA03.ACA03.value)
}

function salvar04CA() {
    localStorage.setItem("tabeladia04CA", document.linha02CA04.ACA04.value)
}

function salvar05CA() {
    localStorage.setItem("tabeladia05CA", document.linha02CA05.ACA05.value)
}

function salvar06CA() {
    localStorage.setItem("tabeladia06CA", document.linha02CA06.ACA06.value)
}

function salvar07CA() {
    localStorage.setItem("tabeladia07CA", document.linha02CA07.ACA07.value)
}

function salvar01EX() {
    localStorage.setItem("tabeladia01EX", document.linha03EX01.AEX01.value)
}

function salvar02EX() {
    localStorage.setItem("tabeladia02EX", document.linha03EX02.AEX02.value)
}

function salvar03EX() {
    localStorage.setItem("tabeladia03EX", document.linha03EX03.AEX03.value)
}

function salvar04EX() {
    localStorage.setItem("tabeladia04EX", document.linha03EX04.AEX04.value)
}

function salvar05EX() {
    localStorage.setItem("tabeladia05EX", document.linha03EX05.AEX05.value)
}

function salvar06EX() {
    localStorage.setItem("tabeladia06EX", document.linha03EX06.AEX06.value)
}

function salvar07EX() {
    localStorage.setItem("tabeladia07EX", document.linha03EX07.AEX07.value)
}



function exibirAF() {

    var valorBI01 = parseInt(localStorage.getItem("tabeladia01BI"));
    var valorBI02 = parseInt(localStorage.getItem("tabeladia02BI"));
    var valorBI03 = parseInt(localStorage.getItem("tabeladia03BI"));
    var valorBI04 = parseInt(localStorage.getItem("tabeladia04BI"));
    var valorBI05 = parseInt(localStorage.getItem("tabeladia05BI"));
    var valorBI06 = parseInt(localStorage.getItem("tabeladia06BI"));
    var valorBI07 = parseInt(localStorage.getItem("tabeladia07BI"));

    var valorBIFinal = ((valorBI01 + valorBI02 + valorBI03 + valorBI04 + valorBI05 + valorBI06 + valorBI07) / 7).toFixed(1)

    imprimirBI(valorBIFinal);

    var valorCA01 = parseInt(localStorage.getItem("tabeladia01CA"));
    var valorCA02 = parseInt(localStorage.getItem("tabeladia02CA"));
    var valorCA03 = parseInt(localStorage.getItem("tabeladia03CA"));
    var valorCA04 = parseInt(localStorage.getItem("tabeladia04CA"));
    var valorCA05 = parseInt(localStorage.getItem("tabeladia05CA"));
    var valorCA06 = parseInt(localStorage.getItem("tabeladia06CA"));
    var valorCA07 = parseInt(localStorage.getItem("tabeladia07CA"));

    var valorCAFinal = ((valorCA01 + valorCA02 + valorCA03 + valorCA04 + valorCA05 + valorCA06 + valorCA07) / 7).toFixed(1)

    imprimirCA(valorCAFinal);

    var valorEX01 = parseInt(localStorage.getItem("tabeladia01EX"));
    var valorEX02 = parseInt(localStorage.getItem("tabeladia02EX"));
    var valorEX03 = parseInt(localStorage.getItem("tabeladia03EX"));
    var valorEX04 = parseInt(localStorage.getItem("tabeladia04EX"));
    var valorEX05 = parseInt(localStorage.getItem("tabeladia05EX"));
    var valorEX06 = parseInt(localStorage.getItem("tabeladia06EX"));
    var valorEX07 = parseInt(localStorage.getItem("tabeladia07EX"));

    var valorEXFinal = ((valorEX01 + valorEX02 + valorEX03 + valorEX04 + valorEX05 + valorEX06 + valorEX07) / 7).toFixed(1)

    imprimirEX(valorEXFinal);

    var valorMediaFinalAF = ((valorBI01 + valorBI02 + valorBI03 + valorBI04 + valorBI05 + valorBI06 + valorBI07 + valorCA01 + valorCA02 + valorCA03 + valorCA04 + valorCA05 + valorCA06 + valorCA07 + valorEX01 + valorEX02 + valorEX03 + valorEX04 + valorEX05 + valorEX06 + valorEX07) / 21).toFixed(1)

    imprimirMediaTotalAF(valorMediaFinalAF);

}

function imprimirBI(valorBIFinal) {
    var imprimirBITexto = "Bicicleta: " + valorBIFinal + "%"
    var localExibirBI = document.getElementById("mediaBI")
    localExibirBI.innerHTML = imprimirBITexto
}

function imprimirCA(valorCAFinal) {
    var imprimirCATexto = "Caminhada: " + valorCAFinal + "%"
    var localExibirCA = document.getElementById("mediaCA")
    localExibirCA.innerHTML = imprimirCATexto
}

function imprimirEX(valorEXFinal) {
    var imprimirEXTexto = "Exercícios Fisícos: " + valorEXFinal + "%"
    var localExibirEX = document.getElementById("mediaEX")
    localExibirEX.innerHTML = imprimirEXTexto
}

function imprimirMediaTotalAF(valorMediaFinalAF) {
    var imprimirMediaTexto = "Média Final: " + valorMediaFinalAF + "%"
    var localExibirMedia = document.getElementById("mediaTotalAF")
    localExibirMedia.innerHTML = imprimirMediaTexto
}

function ativarSaude() {
    var aparecerNaTela = "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Saúde</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section> <section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>Exposição ao Sol</p></section><section class='box-items-02'><form name='linha01SO01'><input type='text' class='input-menu-02' name='ASO01' id='ASO01'></form><button onclick='salvar01SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO02'><input type='text' class='input-menu-02' name='ASO02' id='ASO02'></form><button onclick='salvar02SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO03'><input type='text' class='input-menu-02' name='ASO03' id='ASO03'></form><button onclick='salvar03SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO04'><input type='text' class='input-menu-02' name='ASO04' id='ASO04'></form><button onclick='salvar04SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO05'><input type='text' class='input-menu-02' name='ASO05' id='ASO05'></form><button onclick='salvar05SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO06'><input type='text' class='input-menu-02' name='ASO06' id='ASO06'></form><button onclick='salvar06SO(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01SO07'><input type='text' class='input-menu-02' name='ASO07' id='ASO07'></form><button onclick='salvar07SO(); exibirSA()' class='botao-salvar'>Salvar</button></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Alimentção</p></section><section class='box-items-03'><form name='linha02AL01'><input type='text' class='input-menu-02' name='AAL01' id='AAL01'></form><button onclick='salvar01AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL02'><input type='text' class='input-menu-02' name='AAL02' id='AAL02'></form><button onclick='salvar02AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL03'><input type='text' class='input-menu-02' name='AAL03' id='AAL03'></form><button onclick='salvar03AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL04'><input type='text' class='input-menu-02' name='AAL04' id='AAL04'></form><button onclick='salvar04AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL05'><input type='text' class='input-menu-02' name='AAL05' id='AAL05'></form><button onclick='salvar05AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL06'><input type='text' class='input-menu-02' name='AAL06' id='AAL06'></form><button onclick='salvar06AL(); exibirSA()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02AL07'><input type='text' class='input-menu-02' name='AAL07' id='AAL07'></form><button onclick='salvar07AL(); exibirSA()' class='botao-salvar'>Salvar</button></section></div></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaHC' id='mediaSO'></section><section class='mediaJS' id='mediaAL'></section><button onclick='salvarTodosAF()' class='botao-todos'>Salvar</button><section class='mediaTotal' id='mediaTotalSA'></section></div></section>"
    var imprimir = document.getElementById("imprimirSaude")
    imprimir.innerHTML = aparecerNaTela
}

function desativarSaude() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirSaude")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodosSA() {
    salvar01SO()
    salvar02SO()
    salvar03SO()
    salvar04SO()
    salvar05SO()
    salvar06SO()
    salvar07SO()

    salvar01AL()
    salvar02AL()
    salvar03AL()
    salvar04AL()
    salvar05AL()
    salvar06AL()
    salvar07AL()

    exibirSA()
}

function salvar01SO() {
    localStorage.setItem("tabeladia01SO", document.linha01SO01.ASO01.value)
}

function salvar02SO() {
    localStorage.setItem("tabeladia02SO", document.linha01SO02.ASO02.value)
}

function salvar03SO() {
    localStorage.setItem("tabeladia03SO", document.linha01SO03.ASO03.value)
}

function salvar04SO() {
    localStorage.setItem("tabeladia04SO", document.linha01SO04.ASO04.value)
}

function salvar05SO() {
    localStorage.setItem("tabeladia05SO", document.linha01SO05.ASO05.value)
}

function salvar06SO() {
    localStorage.setItem("tabeladia06SO", document.linha01SO06.ASO06.value)
}

function salvar07SO() {
    localStorage.setItem("tabeladia07SO", document.linha01SO07.ASO07.value)
}

function salvar01AL() {
    localStorage.setItem("tabeladia01AL", document.linha02AL01.AAL01.value)
}

function salvar02AL() {
    localStorage.setItem("tabeladia02AL", document.linha02AL02.AAL02.value)
}

function salvar03AL() {
    localStorage.setItem("tabeladia03AL", document.linha02AL03.AAL03.value)
}

function salvar04AL() {
    localStorage.setItem("tabeladia04AL", document.linha02AL04.AAL04.value)
}

function salvar05AL() {
    localStorage.setItem("tabeladia05AL", document.linha02AL05.AAL05.value)
}

function salvar06AL() {
    localStorage.setItem("tabeladia06AL", document.linha02AL06.AAL06.value)
}

function salvar07AL() {
    localStorage.setItem("tabeladia07AL", document.linha02AL07.AAL07.value)
}

function exibirSA() {

    var valorSO01 = parseInt(localStorage.getItem("tabeladia01SO"));
    var valorSO02 = parseInt(localStorage.getItem("tabeladia02SO"));
    var valorSO03 = parseInt(localStorage.getItem("tabeladia03SO"));
    var valorSO04 = parseInt(localStorage.getItem("tabeladia04SO"));
    var valorSO05 = parseInt(localStorage.getItem("tabeladia05SO"));
    var valorSO06 = parseInt(localStorage.getItem("tabeladia06SO"));
    var valorSO07 = parseInt(localStorage.getItem("tabeladia07SO"));

    var valorSOFinal = ((valorSO01 + valorSO02 + valorSO03 + valorSO04 + valorSO05 + valorSO06 + valorSO07) / 7).toFixed(1)

    imprimirSO(valorSOFinal);

    var valorAL01 = parseInt(localStorage.getItem("tabeladia01AL"));
    var valorAL02 = parseInt(localStorage.getItem("tabeladia02AL"));
    var valorAL03 = parseInt(localStorage.getItem("tabeladia03AL"));
    var valorAL04 = parseInt(localStorage.getItem("tabeladia04AL"));
    var valorAL05 = parseInt(localStorage.getItem("tabeladia05AL"));
    var valorAL06 = parseInt(localStorage.getItem("tabeladia06AL"));
    var valorAL07 = parseInt(localStorage.getItem("tabeladia07AL"));

    var valorALFinal = ((valorAL01 + valorAL02 + valorAL03 + valorAL04 + valorAL05 + valorAL06 + valorAL07) / 7).toFixed(1)

    imprimirAL(valorALFinal);

    var valorMediaFinalSA = ((valorSO01 + valorSO02 + valorSO03 + valorSO04 + valorSO05 + valorSO06 + valorSO07 + valorAL01 + valorAL02 + valorAL03 + valorAL04 + valorAL05 + valorAL06 + valorAL07) / 14).toFixed(1)

    imprimirMediaTotalSA(valorMediaFinalSA);

}

function imprimirSO(valorSOFinal) {
    var imprimirSOTexto = "Exposição ao Sol: " + valorSOFinal + "%"
    var localExibirSO = document.getElementById("mediaSO")
    localExibirSO.innerHTML = imprimirSOTexto
}

function imprimirAL(valorALFinal) {
    var imprimirALTexto = "Alimentação: " + valorALFinal + "%"
    var localExibirAL = document.getElementById("mediaAL")
    localExibirAL.innerHTML = imprimirALTexto
}

function imprimirMediaTotalSA(valorMediaFinalSA) {
    var imprimirMediaTexto = "Média Final: " + valorMediaFinalSA + "%"
    var localExibirMedia = document.getElementById("mediaTotalSA")
    localExibirMedia.innerHTML = imprimirMediaTexto
}

function ativarEstudos() {
    var aparecerNaTela =     "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Estudos</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>Alemão</p></section><section class='box-items-02'><div class='items-menu-02'>-</div></section><section class='box-items-02'><form name='linha01AM02'><input type='text' class='input-menu-02' name='AAM02' id='AAM02'></form><button onclick='salvar02AM(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01AM03'><input type='text' class='input-menu-02' name='AAM03' id='AAM03'></form><button onclick='salvar03AM(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01AM04'><input type='text' class='input-menu-02' name='AAM04' id='AAM04'></form><button onclick='salvar04AM(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01AM05'><input type='text' class='input-menu-02' name='AAM05' id='AAM05'></form><button onclick='salvar05AM(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01AM06'><input type='text' class='input-menu-02' name='AAM06' id='AAM06'></form><button onclick='salvar06AM(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><div class='items-menu-02'>-</div></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Geografia</p></section><section class='box-items-03'><form name='linha02GE01'><input type='text' class='input-menu-02' name='AGE01' id='AGE01'></form><button onclick='salvar01GE(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha02GE03'><input type='text' class='input-menu-02' name='AGE03' id='AGE03'></form><button onclick='salvar03GE(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02GE04'><input type='text' class='input-menu-02' name='AGE04' id='AGE04'></form><button onclick='salvar04GE(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02GE05'><input type='text' class='input-menu-02' name='AGE05' id='AGE05'></form><button onclick='salvar05GE(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><form name='linha02GE06'><input type='text' class='input-menu-02' name='AGE06' id='AGE06'></form><button onclick='salvar06GE(); exibirES()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section></div></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaHC' id='mediaAM'></section><section class='mediaJS' id='mediaGE'></section><button onclick='salvarTodosES()'class='botao-todos'>Salvar</button><section class='mediaTotal' id='mediaTotalES'></section></div></section>"
    var imprimir = document.getElementById("imprimirEstudos")
    imprimir.innerHTML = aparecerNaTela
}

function desativarEstudos() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirEstudos")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodosES() {
    salvar02AM()
    salvar03AM()
    salvar04AM()
    salvar05AM()
    salvar06AM()

    salvar01GE()
    salvar03GE()
    salvar04GE()
    salvar05GE()
    salvar06GE()

    exibirES()
}

function salvar02AM() {
    localStorage.setItem("tabeladia02AM", document.linha01AM02.AAM02.value)
}

function salvar03AM() {
    localStorage.setItem("tabeladia03AM", document.linha01AM03.AAM03.value)
}

function salvar04AM() {
    localStorage.setItem("tabeladia04AM", document.linha01AM04.AAM04.value)
}

function salvar05AM() {
    localStorage.setItem("tabeladia05AM", document.linha01AM05.AAM05.value)
}

function salvar06AM() {
    localStorage.setItem("tabeladia06AM", document.linha01AM06.AAM06.value)
}

function salvar01GE() {
    localStorage.setItem("tabeladia01GE", document.linha02GE01.AGE01.value)
}

function salvar03GE() {
    localStorage.setItem("tabeladia03GE", document.linha02GE03.AGE03.value)
}

function salvar04GE() {
    localStorage.setItem("tabeladia04GE", document.linha02GE04.AGE04.value)
}

function salvar05GE() {
    localStorage.setItem("tabeladia05GE", document.linha02GE05.AGE05.value)
}

function salvar06GE() {
    localStorage.setItem("tabeladia06GE", document.linha02GE06.AGE06.value)
}

function exibirES() {

    var valorAM02 = parseInt(localStorage.getItem("tabeladia02AM"));
    var valorAM03 = parseInt(localStorage.getItem("tabeladia03AM"));
    var valorAM04 = parseInt(localStorage.getItem("tabeladia04AM"));
    var valorAM05 = parseInt(localStorage.getItem("tabeladia05AM"));
    var valorAM06 = parseInt(localStorage.getItem("tabeladia06AM"));

    var valorAMFinal = ((valorAM02 + valorAM03 + valorAM04 + valorAM05 + valorAM06 ) /5).toFixed(1)

    imprimirAM(valorAMFinal);

    var valorGE01 = parseInt(localStorage.getItem("tabeladia01GE"));
    var valorGE03 = parseInt(localStorage.getItem("tabeladia03GE"));
    var valorGE04 = parseInt(localStorage.getItem("tabeladia04GE"));
    var valorGE05 = parseInt(localStorage.getItem("tabeladia05GE"));
    var valorGE06 = parseInt(localStorage.getItem("tabeladia06GE"));

    var valorGEFinal = ((valorGE01 + valorGE03 + valorGE04 + valorGE05 + valorGE06) /5).toFixed(1)

    imprimirGE(valorGEFinal);

    var valorMediaFinalES = ((valorAM02 + valorAM03 + valorAM04 + valorAM05 + valorAM06 + valorGE01 + valorGE03 + valorGE04 + valorGE05 + valorGE06 ) /10).toFixed(1)

    imprimirMediaTotalES(valorMediaFinalES);

}

function imprimirAM(valorAMFinal) {
    var imprimirAMTexto = "Estudo de Alemão: " + valorAMFinal + "%"
    var localExibirAM = document.getElementById("mediaAM")
    localExibirAM.innerHTML = imprimirAMTexto
}

function imprimirGE(valorGEFinal) {
    var imprimirGETexto = "Estudo de Geografia: " + valorGEFinal + "%"
    var localExibirGE = document.getElementById("mediaGE")
    localExibirGE.innerHTML = imprimirGETexto
}

function imprimirMediaTotalES(valorMediaFinalES) {
    var imprimirMediaTexto = "Média Final: " + valorMediaFinalES + "%"
    var localExibirMedia = document.getElementById("mediaTotalES")
    localExibirMedia.innerHTML = imprimirMediaTexto
}

function ativarAtividadesTech() {
    var aparecerNaTela = "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Atividades</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>Páginas<br>WEB</p></section><section class='box-items-02'><form name='linha01PW01'><input type='text' class='input-menu-02' name='PW01' id='APW01'></form><button onclick='salvar01PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW02'><input type='text' class='input-menu-02' name='PW02' id='APW02'></form><button onclick='salvar02PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW03'><input type='text' class='input-menu-02' name='PW03' id='APW03'></form><button onclick='salvar03PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW04'><input type='text' class='input-menu-02' name='PW04' id='APW04'></form><button onclick='salvar04PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW05'><input type='text' class='input-menu-02' name='PW05' id='APW05'></form><button onclick='salvar05PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW06'><input type='text' class='input-menu-02' name='PW06' id='APW06'></form><button onclick='salvar06PW(); exibirAT()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01PW07'><input type='text' class='input-menu-02' name='PW07' id='APW07'></form><button onclick='salvar07PW(); exibirAT()' class='botao-salvar'>Salvar</button></section></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaEX' id='mediaPW'></section><button onclick='salvarTodosAT()'class='botao-todos'>Salvar</button></div></section>"
    var imprimir = document.getElementById("imprimirAtividadesTech")
    imprimir.innerHTML = aparecerNaTela
}

function desativarAtividadesTech() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirAtividadesTech")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodosAT() {
    salvar01PW()
    salvar02PW()
    salvar03PW()
    salvar04PW()
    salvar05PW()
    salvar06PW()
    salvar07PW()

    exibirAT()
}

function salvar01PW() {
    localStorage.setItem("tabeladia01PW", document.linha01PW01.APW01.value)
}

function salvar02PW() {
    localStorage.setItem("tabeladia02PW", document.linha01PW02.APW02.value)
}

function salvar03PW() {
    localStorage.setItem("tabeladia03PW", document.linha01PW03.APW03.value)
}

function salvar04PW() {
    localStorage.setItem("tabeladia04PW", document.linha01PW04.APW04.value)
}

function salvar05PW() {
    localStorage.setItem("tabeladia05PW", document.linha01PW05.APW05.value)
}

function salvar06PW() {
    localStorage.setItem("tabeladia06PW", document.linha01PW06.APW06.value)
}

function salvar07PW() {
    localStorage.setItem("tabeladia07PW", document.linha01PW07.APW07.value)
}

function exibirAT() {

    var valorPW01 = parseInt(localStorage.getItem("tabeladia01PW"));
    var valorPW02 = parseInt(localStorage.getItem("tabeladia02PW"));
    var valorPW03 = parseInt(localStorage.getItem("tabeladia03PW"));
    var valorPW04 = parseInt(localStorage.getItem("tabeladia04PW"));
    var valorPW05 = parseInt(localStorage.getItem("tabeladia05PW"));
    var valorPW06 = parseInt(localStorage.getItem("tabeladia06PW"));
    var valorPW07 = parseInt(localStorage.getItem("tabeladia07PW"));

    var valorPWFinal = ((valorPW01 + valorPW02 + valorPW03 + valorPW04 + valorPW05 + valorPW06 + valorPW07) / 7).toFixed(1)

    imprimirPW(valorPWFinal);
}

function imprimirPW(valorPWFinal) {
    var imprimirPWTexto = "Exposição ao PWl: " + valorPWFinal + "%"
    var localExibirPW = document.getElementById("mediaPW")
    localExibirPW.innerHTML = imprimirPWTexto
}

function ativarOrganizacao() {
    var aparecerNaTela = "<section><div class='vazio-cima'></div><div class='linha-01'><section class='box-titulo-01'><p class='titulo-menu-01'>Atividades</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 09</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 10</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 11</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 12</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 13</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 14</p></section><section class='box-items-01'><p class='items-menu-01'>Dia 15</p></section></div><div class='linha-02'><section class='box-titulo-02'><p class='titulo-menu-02'>Cozinha</p></section><section class='box-items-02'><form name='linha01CO01'><input type='text' class='input-menu-02' name='ACO01' id='CO01'></form><button onclick='salvar01CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO02'><input type='text' class='input-menu-02' name='ACO02' id='CO02'></form><button onclick='salvar02CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO03'><input type='text' class='input-menu-02' name='ACO03' id='CO03'></form><button onclick='salvar03CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO04'><input type='text' class='input-menu-02' name='ACO04' id='CO04'></form><button onclick='salvar04CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO05'><input type='text' class='input-menu-02' name='ACO05' id='CO05'></form><button onclick='salvar05CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO06'><input type='text' class='input-menu-02' name='ACO06' id='CO06'></form><button onclick='salvar06CO(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-02'><form name='linha01CO07'><input type='text' class='input-menu-02' name='ACO07' id='CO07'></form><button onclick='salvar07CO(); exibirOR()' class='botao-salvar'>Salvar</button></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Quarto</p></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha02QU02'><input type='text' class='input-menu-02' name='AQU02' id='AQU02'></form><button onclick='salvar02QU(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha02QU04'><input type='text' class='input-menu-02' name='AQU04' id='AQU04'></form><button onclick='salvar04QU(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha02QU06'><input type='text' class='input-menu-02' name='AQU06' id='AQU06'></form><button onclick='salvar06QU(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section></div><div class='linha-03'><section class='box-titulo-03'><p class='titulo-menu-03'>Jardim</p></section><section class='box-items-03'><form name='linha03JA01'><input type='text' class='input-menu-02' name='AJA01' id='AJA01'></form><button onclick='salvar01JA(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha03JA03'><input type='text' class='input-menu-02' name='AJA03' id='AJA03'></form><button onclick='salvar03JA(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><form name='linha03JA05'><input type='text' class='input-menu-02' name='AJA05' id='AJA05'></form><button onclick='salvar05JA(); exibirOR()' class='botao-salvar'>Salvar</button></section><section class='box-items-03'><div class='items-menu-02'>-</div></section><section class='box-items-03'><div class='items-menu-02'>-</div></section></div><div class='vazio-baixo'></div><div class='exibirMedia'><section class='mediaHC' id='mediaCO'></section><section class='mediaJS' id='mediaJA'></section><section class='mediaEX' id='mediaQU'></section> <button onclick='salvarTodosOR()' class='botao-todos'>Salvar</button><section class='mediaTotal' id='mediaTotalOR'></section></div></section>"
    var imprimir = document.getElementById("imprimirOrganizacao")
    imprimir.innerHTML = aparecerNaTela
}

function desativarOrganizacao() {
    var apagarDaTela = ""
    var imprimir = document.getElementById("imprimirOrganizacao")
    imprimir.innerHTML = apagarDaTela
}

function salvarTodosOR() {
    salvar01CO()
    salvar02CO()
    salvar03CO()
    salvar04CO()
    salvar05CO()
    salvar06CO()

    salvar01JA()
    salvar03JA()
    salvar05JA()

    salvar02QU()
    salvar04QU()
    salvar06QU()

    exibirOR()
}

function salvar01CO() {
    localStorage.setItem("tabeladia01CO", document.linha01CO01.ACO01.value)
}

function salvar02CO() {
    localStorage.setItem("tabeladia02CO", document.linha01CO02.ACO02.value)
}

function salvar03CO() {
    localStorage.setItem("tabeladia03CO", document.linha01CO03.ACO03.value)
}

function salvar04CO() {
    localStorage.setItem("tabeladia04CO", document.linha01CO04.ACO04.value)
}

function salvar05CO() {
    localStorage.setItem("tabeladia05CO", document.linha01CO05.ACO05.value)
}

function salvar06CO() {
    localStorage.setItem("tabeladia06CO", document.linha01CO06.ACO06.value)
}


function salvar01JA() {
    localStorage.setItem("tabeladia01JA", document.linha03JA01.AJA01.value)
}

function salvar03JA() {
    localStorage.setItem("tabeladia03JA", document.linha03JA03.AJA03.value)
}

function salvar05JA() {
    localStorage.setItem("tabeladia05JA", document.linha03JA05.AJA05.value)
}

function salvar02QU() {
    localStorage.setItem("tabeladia02QU", document.linha02QU02.AQU02.value)
}

function salvar04QU() {
    localStorage.setItem("tabeladia04QU", document.linha02QU04.AQU04.value)
}

function salvar06QU() {
    localStorage.setItem("tabeladia06QU", document.linha02QU06.AQU06.value)
}

function exibirOR() {

    var valorCO01 = parseInt(localStorage.getItem("tabeladia01CO"));
    var valorCO02 = parseInt(localStorage.getItem("tabeladia02CO"));
    var valorCO03 = parseInt(localStorage.getItem("tabeladia03CO"));
    var valorCO04 = parseInt(localStorage.getItem("tabeladia04CO"));
    var valorCO05 = parseInt(localStorage.getItem("tabeladia05CO"));
    var valorCO06 = parseInt(localStorage.getItem("tabeladia06CO"));

    var valorCOFinal = ((valorCO01 + valorCO02 + valorCO03 + valorCO04 + valorCO05 + valorCO06) / 6).toFixed(1)

    imprimirCO(valorCOFinal);

    var valorJA01 = parseInt(localStorage.getItem("tabeladia01JA"));
    var valorJA03 = parseInt(localStorage.getItem("tabeladia03JA"));
    var valorJA05 = parseInt(localStorage.getItem("tabeladia05JA"));

    var valorJAFinal = ((valorJA01 + valorJA03 + valorJA05) / 3).toFixed(1)

    imprimirJA(valorJAFinal);

    var valorQU02 = parseInt(localStorage.getItem("tabeladia02QU"));
    var valorQU04 = parseInt(localStorage.getItem("tabeladia04QU"));
    var valorQU06 = parseInt(localStorage.getItem("tabeladia06QU"));

    var valorQUFinal = ((valorQU02 + valorQU04 + valorQU06) / 3).toFixed(1)

    imprimirQU(valorQUFinal);

    var valorMediaFinalOR = ((valorCO01 + valorCO02 + valorCO03 + valorCO04 + valorCO05 + valorCO06 + valorJA01 + valorJA03 + valorJA05 + valorQU02 + valorQU04 + valorQU06) / 12).toFixed(1)

    imprimirMediaTotalOR(valorMediaFinalOR);

}

function imprimirCO(valorCOFinal) {
    var imprimirCOTexto = "Cozinha: " + valorCOFinal + "%"
    var localExibirCO = document.getElementById("mediaCO")
    localExibirCO.innerHTML = imprimirCOTexto
}

function imprimirJA(valorJAFinal) {
    var imprimirJATexto = "Jardinagem: " + valorJAFinal + "%"
    var localExibirJA = document.getElementById("mediaJA")
    localExibirJA.innerHTML = imprimirJATexto
}

function imprimirQU(valorQUFinal) {
    var imprimirQUTexto = "Quarto: " + valorQUFinal + "%"
    var localExibirQU = document.getElementById("mediaQU")
    localExibirQU.innerHTML = imprimirQUTexto
}

function imprimirMediaTotalOR(valorMediaFinalOR) {
    var imprimirMediaTexto = "Média Final: " + valorMediaFinalOR + "%"
    var localExibirMedia = document.getElementById("mediaTotalOR")
    localExibirMedia.innerHTML = imprimirMediaTexto
}