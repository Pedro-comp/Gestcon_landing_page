function enviaEmail() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    var form = document.getElementById("meuFormulario");

    var msgBody = "Nome: " + nome + "<br />Email: " + email + "<br />Mensagem: " + mensagem;

    Email.send({
        SecureToken: "bdd7342a-732a-4af5-a774-0bd5c1a486f6",
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