// Script para manipulação de elementos dinâmicos, se necessário

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 450)
})

function redirect(vehicle) {
    // Oculta todos os elementos de escolha de opções
    document.querySelectorAll('.choose-options').forEach(function(el) {
        el.style.display = 'none';
    });

    // Exibe as opções específicas do veículo selecionado
    document.getElementById('choose-options-' + vehicle).style.display = 'block';
}

function purchase(vehicle) {
    // Lógica de compra (pode ser implementada aqui)
    alert('Compra do seu ' + vehicle + ' realizada!');
    // Redirecionamento ou outras ações após a compra
}

