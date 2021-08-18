function fase2() {
    
    document.write(`
    <div class="container">
    
    <h1 class="pergunta">Riley e seus pais acabaram de chegar de mudança para San Francisco e ela não está gostando
    de nada. Está muito chateada. O que o trio de emoções decide fazer para tentar animá-la?
    </h1>
    
    <div class="opcoes">
    <p>
    1- Deixam a Raiva comandar, então Riley fica pistola e se isola no quarto.
    </p>
    
    <p>
    2- Alegria decide colocar lembranças felizes com a família para que Riley enxergue um lado positivo e vá brincar na sala com seus pais.
    </p>
    </div>
    
    <a href="../raiva/fase2-raiva.html">
    Escolher
    </a>
    
    
    </div>
    `)
}

function escolhaRaiva() {
    
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = Alegria coloca a tristeza no cantinho da leitura. A raiva acredita ser um absurdo abandonar Woody e Buzz Lightyear.\n 2 = Tristeza se joga no chão e chora pois não quer doar nada."
    
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

escolhaRaiva()




