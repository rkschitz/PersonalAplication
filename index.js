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
    const esportes = document.getElementById('esportes')
    
    aboutMeNavLink.classList.remove('active');
    experiencesNavLink.classList.remove('active');
    estudos.classList.remove('active');
    esportes.classList.remove('active');
    
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
    } else if (param == 4) {
        esportes.classList.add('active');
        this.mostrarConteudo(4);
    }
}

function mostrarConteudo(param){

    const inicial = document.getElementById('beginning');
    const about = document.getElementById('aboutme');
    const experiences = document.getElementById('experiences');
    const studies = document.getElementById('studies');
    const sports = document.getElementById('sports');

    inicial.classList.remove('active-div');
    about.classList.remove('active-div');
    experiences.classList.remove('active-div');
    studies.classList.remove('active-div');
    sports.classList.remove('active-div');


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
    } else if(param == 4){
        sports.classList.add('active-div');
    }
}   

function sidebar() {
    var sidebar = document.querySelector('.sidebar-mobile');
    sidebar.classList.toggle('open');
  }