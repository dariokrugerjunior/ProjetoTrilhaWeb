function validaFaleConosco(){
    if (document.frmfaleconosco.txtnome.value == ""){
        alert("Preencha o campo Nome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }else if(document.frmfaleconosco.txtfone.value == ""){
        alert("Preencha o campo Telefone.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }else if(document.frmFaleconosco.txtemail.value == ""){
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