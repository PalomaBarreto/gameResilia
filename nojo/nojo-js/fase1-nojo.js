function fase2() {
    
    document.write(`
    <div class="container">

    <h1 class="pergunta">É o primeiro dia de aula na escola nova. Riley gostaria de fazer novos amigos na hora do recreio, mas algumas meninas estão olhando para ela e rindo com deboche. Qual a melhor reação?
    </h1>

    <div class="opcoes">
        <p>
        1- Nojinho e Tristeza se juntam para debater sobre a situação e pensam que talvez seja melhor Riley não se aproximar dessas pessoas.
        </p>

        <p>
        2- Alegria está muito empolgada com tantas novidades e acredita que Riley deve tentar se aproximar.
        </p>
    </div>

    <a href="../nojo/fase2-nojo.html">
        Escolher
    </a>


    </div>
    `)
}

function escolhaNojo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = Nojinho de exalta, afinal uma pizza de arvorezinhas verdes não pode ser gostosa.\n 2 = o trio fica perdido e acaba se distraindo com discussões. De repente a raiva toma o controle."

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

escolhaNojo()