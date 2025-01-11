document.addEventListener('DOMContentLoaded', function(){
    // [] faz com que tu possa procurar por um atributo
    const botoes = this.querySelectorAll('[data-tab-button]')
    console.log(botoes)
    
    botoes.forEach(function(botao){
        botao.addEventListener('click', function(b){
            // É necessario acessar o target primeiro, senao fica como indefinido
            // b.target.dataset.tabButton devolve o nome do parametro contido em data-tab-button
            // b não é o botão em si, mas sim o evento disparado pelo clique do botao, que tem vários parêmetros, tal como o target
            // esse sendo o objeto que disparou o evento
            apagaBordaBotoes()
            b.target.classList.add('banner-shows__tabs__button--is-active')
            const tabNome = b.target.dataset.tabButton;
            console.log(tabNome)
            const tab = document.querySelector(`[data-tab-id=${tabNome}]`)
            apagaAbas()
            tab.classList.add('shows--is-active')
        })
    })
})


function apagaAbas(){
    const abas = document.querySelectorAll('[data-tab-id]')
    abas.forEach(function(aba){
        aba.classList.remove('shows--is-active')
    })
}

function apagaBordaBotoes(){
    const botoes = document.querySelectorAll('[data-tab-button]')
    botoes.forEach(function(botao){
        botao.classList.remove('banner-shows__tabs__button--is-active')
    })
}