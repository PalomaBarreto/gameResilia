escolhaMedo()

function escolhaMedo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = A Alegria está se sentindo perdida em meio ao caos e entrega a liderança para o Medo, o qual decide acionar o botão do pânico porque acredita que assim Riley voltará para casa.\n 2 = A Tristeza encontra-se aos prantos e modifica memórias alegres em tristes descontroladamente."

    var escolha

    while (escolha != 1 && escolha != 2) {

         
        escolha = prompt(opcoes)
        

        if (escolha == 1) {
            location.href = "../winner/winner.html"
            break
        } 
        
        
        else if (escolha == 2) {
            location.href = "../gameover/gameover.html"
            break
        }
        
        
        else {
            alert('Escolha entre 1 ou 2!')
        }
        
    }
}