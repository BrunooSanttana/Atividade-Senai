  var Usuario;
  var AnoDeNascimento;
  var Idade;
  var AnoAtual;
  var DataAtual;
  var DataDoEvento;
  var NovoEvento;
  var QuantidadeDeParticipantes;
  var Cadastro;
  var EventoJaExistente;

  // Inicio - Entrada de cados cadastrais
    Usuario = window.prompt ('Bem-Vindo, Por gentileza preencha seu nome completo');
    AnoDeNascimento = window.prompt ('informe sua data de nascimento');

  // Calculo idade usuario 
    Idade = (AnoAtual - AnoDeNascimento);
    
    if (idade =>18) {
         window.prompt ( "Informe se deseja cadastrar um NovoEvento ou participar de um EventoJáExistente");

     }  else = {
        window.alert ("Evento proibido para menores de 18 anos");
 } 

    if = (NovoEvento) { 
            window.prompt ("Digite a DataDoEvento");
     }    
          if = (DataDoEvento > DataAtual) { 
              window.prompt ("Digite o nome do seu evento"); 
     }            window.alert ("Cadastro realizado com sucesso") 
                (QuantidadeDeParticipantes = QuantidadeDeParticipantes + 1) 
     
     {      else =  {
            window.alert ("Data inormada Não permitida");
     }
 
    if = (EventoJaExistente) {
       prompt ("Selecione o evento"); 
 }
     if = (QuantidadeDeParticipantes <=100) {
       window.alert ("Cadastro realizado com sucesso");

     } else = {
        window.alert ("Desculpe, cadastro indisponivel, maximo de participantes atingidos");

     }
    }
    