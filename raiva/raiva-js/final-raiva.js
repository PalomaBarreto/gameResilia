escolhaRaiva()

function escolhaRaiva() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = A Raiva aciona o botão do pânico e então Riley levanta-se da mesa chorando e sai correndo para o quarto.\n 2 = A Tristeza sem querer transforma lembranças alegres em tristes. Riley fala tudo o que está sentido para seus pais."

    var escolha

    while (escolha != 1 && escolha != 2) {

         
        escolha = prompt(opcoes)
        

        if (escolha == 2) {
            location.href = "../winner/winner.html"
            break
        } 
        
        
        else if (escolha == 1) {
            location.href = "../gameover/gameover.html"
            break
        }
        
        
        else {
            alert('Escolha entre 1 ou 2!')
        }
        
    }
}