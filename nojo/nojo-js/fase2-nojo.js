escolhaNojo()

function escolhaNojo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = Nojinho e Tristeza se juntam para debater sobre a situação e pensam que talvez seja melhor Riley não se aproximar dessas pessoas.\n 2 = Alegria está muito empolgada com tantas novidades e acredita que Riley deve tentar se aproximar."

    var escolha

    while (escolha != 1 && escolha != 2) {

         
        escolha = prompt(opcoes)
        

        if (escolha == 1) {
            faseFinal()
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

function faseFinal() {
    document.write(`
    <div class="container">

    <h1 class="pergunta">Riley está em seu quarto quando sua mãe pede para que ela guarde suas roupas que estão jogadas e arrume seu quarto. Qual será a boa ideia desse trio para sair dessa furada?
    </h1>

    <div class="opcoes">
        <p>
            1- A tristeza chora e se arrasta pelo chão pois está muito cansada e melancólica.
        </p>
        <p>
            2- Alegria e Nojinho se juntam para escolher uma boa lembrança de quarto limpo para passar na mente de Riley.
        <p>

    </div>

    <a href="../nojo/final-nojo.html">
        Escolher
    </a>


    </div>
    `)
}