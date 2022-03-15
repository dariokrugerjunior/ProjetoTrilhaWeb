function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.")
        document.frmfaleconosco.txtnome.focus();
        return false;   
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$")
    if(!expRegFone.test(fone)){
        alert("Preencha o campo Telefone corretamente.")
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    
    if(document.frmFaleconosco.txtemail.value == ""){
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }else if(document.frmFaleconosco.selmotivo.value == ""){
        alert("Selecione o um motivo.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }else if(document.frmFaleconosco.txacomentario.value == ""){
        alert("Adicione um comentario");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    return true;
}

function verificaMotivo(motivo){
    // capturamos a estrutura div cujo ID é opcaoProduto na variavel elemento
    var elemento = document.getElementById("opcaoProduto");

    //se o valor da variavel for "PR"
    if(motivo=="PR"){
        //Criamos um elemento (tag) <select> e  guardamos na variavel homônima
        var select = document.createElement("select");
        //Setamos nesse novo select o atributo 'name' com o  valor 'selproduto'
        select.setAttribute("name", "selproduto");
        //Conteudo atual da variavel select:
        //<select name="selproduto"></select>

        //Criamos um elemento (tag)<option> e guardamos na variavel homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' como o valor vazio
        option.setAttribute("value", "");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "FR");
        var texto = document.createTextNode("Frezzer");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createNextNode("Geladeira")
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);
    }else {
        if(elemento.firstChild){
            elemento.removeChild(elemento.firstChild);
        }
    }
}


$(document).ready(function(){   
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});