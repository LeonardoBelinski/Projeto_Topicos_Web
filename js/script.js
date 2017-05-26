
    	$(document).ready(function(){
    		$("#botaoenviar").click(function(){
    			var $btn = $(this).button('loading')
    			retorno = validar();
                if (retorno==true){
                	enviado.style.display = 'block';           
                    setTimeout(function(){
                       	$btn.button('reset');
                    }, 3000);
                }
                else{
                	$btn.button('reset'); /*desativa o efeito do botao enviar*/
                }
            });
		    function validar() {
				var nome = formcontato.nome.value;
				var email = formcontato.email.value;
				var mensagem = formcontato.mensagem.value;
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
					alert('Preencha o campo uma mensagem');
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
	    });
    	var scrollToElement = function(el){
		    $('body').animate({ 
		        scrollTop: $(el).offset().top - 50 }, 'slow');
		}