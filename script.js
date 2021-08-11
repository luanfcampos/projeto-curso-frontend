// Aguarda o DOM estar pronto para executar os scripts JQuery
$(document).ready(function(){
    // recebe o evento de submit do formulário
    $("#loginAluno").submit(function(event){
      //Testa se o usuário e asenha estão corretos
      if($("#inputUsuario").val() == "root" && $("#inputSenha").val() == "1234"){
        //Adcionas classes CSS à div mensagem
        $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
        //Remove a classe "alert warning"
        $("#mensagem").removeClass("alert-warning")
        //apresenta a mensagem para o usuario por 3 segundos
        $("#mensagem").text("Usuário logado").show().fadeOut(3000)
      }else{
        //Adcionas classes CSS à div mensagem
        $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
        //Remove a classe "alert success"
        $("#mensagem").removeClass("alert-success")
        //apresenta a mensagem para o usuario por 3 segundos
        $("#mensagem").text("Usuário ou senha inválida!").show().fadeOut(3000)
        event.preventDefault() //bloqueia o evneto do submit
        }
    })
    })