
//isso servepara darboas vindas ao usuario...
//window.alert('quer receber informações do nosso newsletter ?')

//O confim, serve para receber ou continuar novos assuntos
//window.cofim('Quer receber informações do nosso newsletter ?')

//window.console('informaçoes de usuario recebido, sucesso!')

//
//document.getElementById('add-item-btn').addEventListener9'click', function()
//  var newItem = document.createElement('li1);

// esse script serve como uma estrutura para o codigo funcionar

document.getElementById('user-form').addEventListener('submit', function(e) {
   var name = document.getElementById('name').value;
   if (name === '') {
     e.preventDefault();
     document.getElementById('error-message').style.display = 'block';
    }
});
