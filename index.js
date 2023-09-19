const text = document.getElementById('nome');
const letters = text.textContent.split('');
let html = '';
letters.forEach((letter, index) => {
    html += `<span style="animation-delay: ${index * 0.1}s" class="nome">${letter}</span>`;
});
text.innerHTML = html;

this.mostrarConteudo(1);

function mostrarPag(param) {
    const aboutMeNavLink = document.getElementById('aboutme');
    const homeNavLink = document.getElementById('home');
    
    aboutMeNavLink.classList.remove('active');
    homeNavLink.classList.remove('active');
    
    if (param == 1) {
        aboutme.classList.add('active');
        this.mostrarConteudo(1)
    } else if (param == 2) {
        home.classList.add('active');
        this.mostrarConteudo(2)
    }
}

function mostrarConteudo(param){
    const teste = document.getElementById('conteudo')
    let conteudo = null ;
    if(param === null){
        param = 1;
    }
    if(param == 1){
        conteudo = "<div id='about-me'><h1>About me</h1> <p>Olá, meu nome é Ruhan Kaio Schitz, tenho 18 anos e curso Análise e Desenvolvimento de Sistema no Senac.</div>"
        teste.innerHTML= conteudo
    } else if(param == 2){
        conteudo = "<div> id='experience'><h1>Assustadus Tech</div>" 
        teste.innerHTML= conteudo
    }
}