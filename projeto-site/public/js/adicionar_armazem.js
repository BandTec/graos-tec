function validarArm(){
    var Nome   = formuser.Nome.value;
    var CEP    = formuser.CEP.value;
    var Numero = formuser.Numero.value; 
    var Bairro = formuser.Bairro.value;
    var Cidade = formuser.Cidade.value; 
    var Estado = formuser.Estado.value;


    if(Nome == "" || Nome.length <6){
        alert(`O campo "Nome" deve conter no minímo 6 caracteres`);
        formuser.Nome.focus();
        return false;
    }

    if(CEP.length <8 || CEP.length >8){
        alert(`O campo "CEP" deve conter 8 numeros`);
        formuser.CEP.focus();
        return false;
    }
    if(Numero ==""){
        alert(`O campo "Numero não pode ser vazio"`);
        formuser.Numero.focus();
        return false;
    }
    if(Bairro == ""){
        alert(`O campo "Bairro" não pode ser vazio`);
        formuser.Bairro.focus();
        return false;
    }

    if(Cidade == "" || Cidade.length <6){
        alert(`O campo "Cidade" deve conter no minímo 6 caracteres`);
        formuser.Cidade.focus();
        return false;
    }

    if(Estado <2 || Estado >3){
        alert(`O campo "Estado" deve conter no minímo 2 e no maxímo 3 caracteres`);
        formuser.Estado.focus();
        return false;
    }

    
}