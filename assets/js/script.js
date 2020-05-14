document.querySelector('button#btn-submit').addEventListener('click', e => {
    console.log('O botão foi clicado!')

})

document.querySelector('form#form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulario')

})

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulario')

})

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault()

    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value

    let json = {
        email: email,
        senha: senha
    }
    console.log(json)

    if (!json.email) {

        console.error('O campo deve ser preenchido')
    } else if (!json.senha) {

        console.error('O campo senha deve ser preenchido!')

    } else {
        console.info('Dados validados com sucesso')
    }

})