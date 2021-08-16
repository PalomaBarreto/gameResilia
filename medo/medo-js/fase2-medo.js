escolhaMedo()

function escolhaMedo() {
      
    
    var opcoes = "Digite 1 ou 2, conforme sua escolha\n 1 = A Tristeza e o Medo se juntam para lamentar no cantinho da leitura.\n 2 = Alegria pede ajuda a Raiva, quem sabe assim Riley joga e ganha na força do ódio."

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

    <h1 class="pergunta">Riley está muito triste, sente muita saudade de Minnesota, acredita que sua amiga, Meg, irá esquecê-la e abandoná-la. Então decide pegar dinheiro de sua mãe escondido e fugir durante a noite. As emoções precisam entrar em ação urgente!!! O que o trio faz?
    </h1>

    <div class="opcoes">
        <p>
            1- A Alegria está se sentindo perdida em meio ao caos e entrega a liderança para o Medo, o qual decide acionar o botão do pânico porque acredita que assim Riley voltará para casa.
        </p>
        <p>
            2- A Tristeza encontra-se aos prantos e modifica memórias alegres em tristes descontroladamente.

        <p>

    </div>

    <a href="../medo/final-medo.html">
        Escolher
    </a>


    </div>
    `)
}