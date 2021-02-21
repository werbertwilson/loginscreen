document.getElementById('btn-submit').addEventListener('click', e => {
    alert("botão clicado");
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    alert("O mouse está sobre o formulário");
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    alert("Mouse estã fora do formulário")
});