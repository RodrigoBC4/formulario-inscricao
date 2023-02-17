let gatilho = false;
function formularioDados(){
    gatilho = true;
    switch(gatilho){
        case gatilho:
            verifica()
            gatilho = false;
        break
        default:
            alert('erro');

    }
}

function verifica(){
    const dadosNome = document.querySelector('#nome')
    const dadosSobrenome = document.querySelector('#sobrenome')
    const dadosEmail= document.querySelector('#email')
    const dadosSenha = document.querySelector('#senha')

    const testeNome = /\w/.test(dadosNome.value)
    const testeSobrenome = /\w/.test(dadosSobrenome.value)
    const testeEmail = /\w/.test(dadosEmail.value)
    const testeSenha = /\w/.test(dadosSenha.value)
    if (testeNome &&  testeSobrenome && testeEmail && testeSenha){
        camposOk(dadosNome, dadosSobrenome, dadosEmail, dadosSenha) 
    } else {
        camposErr(dadosNome, dadosSobrenome, dadosEmail, dadosSenha)
    }
}

function camposOk(nome, sobrenome, email, senha){
    nome.classList.remove("faltaPreencher")
    sobrenome.classList.remove("faltaPreencher")
    email.classList.remove("faltaPreencher")
    senha.classList.remove("faltaPreencher")
    nome.classList.add("campoPrenchido")
    sobrenome.classList.add("campoPrenchido")
    email.classList.add("campoPrenchido")
    senha.classList.add("campoPrenchido")

}
function camposErr(nome, sobrenome, email, senha){
    nome.classList.remove("campoPrenchido")
    sobrenome.classList.remove("campoPrenchido")
    email.classList.remove("campoPrenchido")
    senha.classList.remove("campoPrenchido")
    nome.classList.add("faltaPreencher")
    sobrenome.classList.add("faltaPreencher")
    email.classList.add("faltaPreencher")
    senha.classList.add("faltaPreencher")

}

