function enviaEmail() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    var form = document.getElementById("meuFormulario");

    var msgBody = "Nome: " + nome + "<br />Email: " + email + "<br />Mensagem: " + mensagem;

    Email.send({
        SecureToken: "eb21ea98-3b73-4f86-82d7-1fdd2e28f6f4",
        To : 'atendimento@gestconp.com.br',
        From : "atendimento@gestconp.com.br",
        Subject : "Email de contato Gestcon",
        Body : msgBody
    }).then(function(response) {
        console.log(response);
        
        if(response === "OK") {
            console.log("Email enviado com sucesso!");
            let msgEmail = document.createElement("p");
            var msgEmailTxt = document.createTextNode("Email enviado com sucesso!");
            msgEmail.appendChild(msgEmailTxt);

            let divMsgEmail = document.getElementById("email_enviado");
            divMsgEmail.appendChild(msgEmail);
        } else {
            console.log("Erro ao enviar email: ", response);
        }
    })
    
    form.reset()
}


const submit = document.getElementById("submitButton");

submit.addEventListener("click", SubmitClick, false);

function SubmitClick(event) {
    event.preventDefault();

    enviaEmail();
}