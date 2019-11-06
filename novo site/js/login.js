(function() {
            
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');
    
    navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });
    
    
    
})();

function login() {
    alert("Teste de Login");
 }

 function cadastrar(){
    alert("Teste de Cadastro");
 }

 function voltar_login() { 
     
  }