function fase2() {
    
    document.write(`
    <div class="container">

    <h1 class="pergunta">Vai ter um campeonato de Hóquei na escola nova e Riley foi convidada para fazer parte de um time. Chegou o dia da estréia e ela está muito nervosa, mesmo sendo o esporte que ela ama, não está se sentindo confiante. O que as emoções decidem fazer para ajudá-la?
    </h1>

    <div class="opcoes">
        <p>
        1- A Tristeza e o Medo se juntam para lamentar no cantinho da leitura.
        </p>

        <p>
        2- Alegria pede ajuda a Raiva, quem sabe assim Riley joga e ganha na força do ódio.
        </p>
    </div>

    <a href="../medo/fase2-medo.html">
        Escolher
    </a>


    </div>
    `)
}

function escolhaMedo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = O Medo entra em pânico e aperta todos o botões da mesa de controle.\n 2 = Alegria acha engraçado os monstros e cai na gargalhada."

    var escolha

    while (escolha != 1 && escolha != 2) {

         
        escolha = prompt(opcoes)
        

        if (escolha == 1) {
            fase2()
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

escolhaMedo()