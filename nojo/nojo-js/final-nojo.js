escolhaNojo()

function escolhaNojo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = A tristeza chora e se arrasta pelo chão pois está muito cansada e melancólica.\n 2 = Alegria e Nojinho se juntam para escolher uma boa lembrança de quarto limpo para passar na mente de Riley."

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