function submitForm(){
    var radioValue = document.getElementById("radio1").checked;
    console.log(radioValue)
    if(radioValue){
        alert("Obrigado por entrar a primeira vez")
    }else{
        alert("Obrigado por voltar no site")
    }

}

function validateForm(event){
    event.preventDefault()

    var name = document.forms.formulario1.elements.idNome;
    var email = document.forms.formulario1.elements.idEmail;
    var comentario = document.forms.formulario1.elements.idComentario;

    if (name.value == "" || name.length < 10) {
        alert("Preencha campo NOME corretamente!");
        name.focus();
        return false;
    };

    if (email.value == "" || email.val.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        email.focus();
       return false;
    }

    if (comentario.value == "" || comentario.value.length < 50) {
        alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
        comentario.focus();
        return false;
    }
    submitForm();
    return true;
}