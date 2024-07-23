document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('animated-paragraph');
    const texts = [
        "Em menos de uma semana, você colocou minha vida de cabeça para baixo.", 
        "Você consegue tirar sorrisos de mim com uma facilidade que ninguém mais tem.",
        "Quando estou com você, não importa se está sol, chovendo, frio ou calor, a sensação é sempre a mesma: nada mais importa além da gente.",

        "Você se tornou uma das pessoas mais importantes para mim em pouco tempo.",
        "E nesse curto período de tempo, você conquistou um espaço no meu coração, um espaço só seu.",
        "De uma forma em que eu quero estar com você de domingo a domingo.",
        "E quando não estou, não paro de pensar em quando vou te ver novamente.",
        
        "Quando eu estou com você, o tempo poderia parar exatamente nesse instante, porque o momento que eu mais estou feliz é quando você está comigo.",

        "Enquanto você sustenta a gente com os 500 reais do seu estágio remunerado, eu posso aprender a cozinhar e tem tudo para dar certo.",

        "Tem uma parte na musica “Amor de fim de noite” que eu acho muito parecida com a gente:",

        "“A gente se parece no jeito de agir",
        "E o seu sorriso tímido me faz sorrir",
        "Eu não aguento mais viver pensando",
        "Em quando a gente vai se ver de novo.”",
        
        "E como diz essa parte, eu estou ansioso por cada momento ao seu lado, contando as horas para te reencontrar.",
        "Você é meu porto seguro,e a cada dia que passa, meu amor por você só cresce",

        "E sim, tudo isso em menos de uma semana.",

        "E bom, como é sua função me ensinar cultura, não posso deixar passar a oportunidade de me expressar também por meio de autores:",

        "“Amor é só uma palavra até que alguém venha e lhe dê sentido.” — Paulo Coelho",

        "“Para nós dois, ‘casa’ não é um lugar. É uma pessoa.” — Stephanie Perkins",

        "“Ele era meu norte, meu sul, meu leste e oeste, minha semana de trabalho e meu descanso de domingo.” — W. H. Auden",

        "“O amor é uma experiência pela qual todo o nosso ser é renovado e refrescado como o são as plantas pela chuva após a seca.” — Bertrand Russell",

        "“E você se lembrar de mim, eu não me importo que todo mundo se esqueça.” — Haruki Murakami",

        "Ok, chega de autores.",

        "Eu ainda tenho mais algumas coisas pra falar.",

        "Quando eu disse que você era uma amiga, eu estava confuso com o que a gente realmente era.",
        "Mas agora eu tenho certeza do que quero que a gente seja.",
        "Eu quero que sejamos mais do que só amigos, mais do que ficantes, mais do que apenas um lance.",
        "E agora eu te pergunto: você quer o mesmo?"


    ];

    let textIndex = 0;

    function typeText() {
        const text = texts[textIndex];
        let index = 0;
        paragraph.textContent = ''; // Limpa o conteúdo do parágrafo para começar a animação

        function typeLetter() {
            if (index < text.length) {
                paragraph.textContent += text.charAt(index);
                index++;
                setTimeout(typeLetter, 50); // Ajuste o tempo (em milissegundos) para a velocidade da animação
            } else {
                textIndex++;
                if (textIndex < texts.length) {
                    setTimeout(typeText, 3000); // Espera 5 segundos antes de começar o próximo texto
                }
            }
        }

        typeLetter();
    }

    typeText();
});