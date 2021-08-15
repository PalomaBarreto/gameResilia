escolhaRaiva()

function escolhaRaiva() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = Deixam a Raiva comandar, então Riley fica pistola e se isola no quarto.\n 2 = A Alegria decide colocar lembranças felizes com a família para que Riley enxergue um lado positivo e vá brincar na sala com seus pais."

    var escolha

    while (escolha != 1 && escolha != 2) {

         
        escolha = prompt(opcoes)
        

        if (escolha == 2) {
            faseFinal()
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

function faseFinal() {
    document.write(`
    <div class="container">

    <h1 class="pergunta">Hora do jantar! A mãe de Riley pergunta como foi o primeiro dia de aula na nova escola, porém Riley teve um dia péssimo. Como as emoções entrarão em ação?
    </h1>

    <div class="opcoes">
        <p>
            1- A Raiva aciona o botão do pânico e então Riley levanta-se da mesa chorando e sai correndo para o quarto.
        </p>
        <p>
            2- A Tristeza sem querer transforma lembranças alegres em tristes. Riley fala tudo o que está sentido para seus pais.
        <p>

    </div>

    <a href="../raiva/final-raiva.html">
        Escolher
    </a>


    </div>
    `)
}



    
