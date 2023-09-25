const text = document.getElementById('nome');
const letters = text.textContent.split('');
let html = '';
letters.forEach((letter, index) => {
    html += `<span style="animation-delay: ${index * 0.1}s" class="nome">${letter}</span>`;
});
text.innerHTML = html;

this.mostrarConteudo(null);

function mostrarPag(param) {
    const aboutMeNavLink = document.getElementById('sobre');
    const experiencesNavLink = document.getElementById('experiencias');
    const estudos = document.getElementById('estudos');
    
    aboutMeNavLink.classList.remove('active');
    experiencesNavLink.classList.remove('active');
    estudos.classList.remove('active');
    
    if (param == 1) {
        aboutMeNavLink.classList.add('active');
        this.mostrarConteudo(1);
    } else if (param == 2) {
        experiencesNavLink.classList.add('active');
        this.mostrarConteudo(2);
    }
    else if (param == 3) {
        estudos.classList.add('active');
        this.mostrarConteudo(3);
    }
}

function mostrarConteudo(param){

    const inicial = document.getElementById('beginning');
    const about = document.getElementById('aboutme');
    const experiences = document.getElementById('experiences');
    const studies = document.getElementById('studies');

    inicial.classList.remove('active-div');
    about.classList.remove('active-div');
    experiences.classList.remove('active-div');
    studies.classList.remove('active-div');


    if(param == null){
        param = 0;
    }

    if(param == 0){
        inicial.classList.add('active-div');
    }else if(param == 1){
        about.classList.add('active-div');
        console.log('1')
    } else if(param == 2){
        experiences.classList.add('active-div');
    } else if(param == 3){
        studies.classList.add('active-div');
    }

    // if(param == 0){
    //     conteudo = "<div id='inicial'><div class='conteudo-inicial'> <span class='title-conteudo'> SEJA BEM VINDO! </span><br><img>Aqui vai a minha imagem</img><br><span>Éssa é minha aplicação pessoal!</span><br></div></div>"
    // }else if(param == 1){
    //     conteudo = "<div id='about-me'><h1>About me</h1> <p>Olá, meu nome é Ruhan Kaio Schitz, tenho 18 anos e curso Análise e Desenvolvimento de Sistema no Senac.</div>"
    // }else if(param == 2){
    //     conteudo = "<div><h1>Assustadus Tech</h1></div>" 
    // }else if(param == 3){
    //     conteudo = "<span>Cursos</span>"
    // }
}   