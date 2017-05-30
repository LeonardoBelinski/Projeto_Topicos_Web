$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    $("#botaoenviar").click(function(){
    	var $btn = $(this).button('loading')
    	retorno = validar();
        if (retorno==true){   
            setTimeout(function(){
                $btn.button('reset');
                enviado.style.display = 'block';
             }, 2000);
         }
         else{
            $btn.button('reset'); /*desativa o efeito do botao enviar*/
        }
    });
	function validar() {
		var nome = formcontato.nome.value;
		var email = formcontato.email.value;
		var mensagem = formcontato.mensagem.value;
		var login = formlogin.login.value;
		var flag = 0;
		if (nome == "") {
			alert('Preencha o campo com seu nome');
			formcontato.nome.focus();
			flag = 1;
		}
		if (email == "") {
			alert('Preencha o campo com seu email');
			formcontato.email.focus();
			flag = 1;
		}
		if (mensagem == "") {
			alert('Preencha o campo com uma mensagem qualquer');
			formcontato.mensagem.focus();
			flag = 1;
		}
		if(flag == 1)
			return false;
		else
			return true;
	}
	$("#botaolimparform").click(
        function(){
            $("#nome").val("");
            $("#email").val("");
            $("#mensagem").val("");
        }
    );
    $("#botaologin").click(function(){
    	var $btn = $(this).button('loading')  
    	retorno = validarlogin(); 
		if (retorno==true){   
            setTimeout(function(){
            	$('#modallogin').modal('hide');
            	$("#login").val("");
    			$("#senha").val("");
                $btn.button('reset');
             }, 2000);
        }
        else{
            $btn.button('reset'); /*desativa o efeito do botao enviar*/
        }
    });
    function validarlogin() {
		var email = formlogin.login.value;
		var senha = formlogin.senha.value;
		var flag = 0;
		if (email == "") {
			alert('Preencha o campo com seu email');
			formlogin.login.focus();
			flag = 1;
		}
		if (senha == "") {
			alert('Preencha o campo com sua senha');
			formlogin.senha.focus();
			flag = 1;
		}
		if(flag == 1)
			return false;
		else
			return true;
	}
	$("#botaocadastrar").click(function(){
    	var $btn = $(this).button('loading')  
    	retorno = validarcadastro(); 
		if(retorno==true){   
            setTimeout(function(){
            	cadastroconcluido.style.display = 'block';
                $btn.button('reset');
             }, 2000);
        }
        else{
            $btn.button('reset'); /*desativa o efeito do botao enviar*/
        }
    });
    function validarcadastro() {
		var nome = formcadastrar.nomecadastrar.value;
		var login = formcadastrar.logincadastrar.value;
		var senha = formcadastrar.senhacadastrar.value;
		var flag = 0;
		if (nome == "") {
			alert('Preencha o campo com seu nome');
			formcadastrar.nomecadastrar.focus();
			flag = 1;
		}
		if (login == "") {
			alert('Preencha o campo com seu email');
			formcadastrar.logincadastrar.focus();
			flag = 1;
		}
		if (senha == "") {
			alert('Preencha o campo com sua senha');
			formcadastrar.senhacadastrar.focus();
			flag = 1;
		}
		if(flag == 1)
			return false;
		else
			return true;
	}
    $("#fecharmodalcadastrar").click(function(){
    	cadastroconcluido.style.display = 'none';
    	$("#nomecadastrar").val("");
    	$("#logincadastrar").val("");
    	$("#senhacadastrar").val("");
    });
    $("#fecharmodallogin").click(function(){
    	$("#login").val("");
    	$("#senha").val("");
    });
});
var scrollToElement = function(el){
	$('body').animate({ 
		scrollTop: $(el).offset().top - 50 }, 'slow');
}
function login() {
	// chama modal
	// alert("login");
	$('#modallogin').modal('show');
}
function cadastrar() {
	// chama modal
	$('#modalcadastrar').modal('show');
}
