document.addEventListener('DOMContentLoaded', function() {
    const boutonBlague = document.getElementById('boutonBlague');
    const boutonReponse = document.getElementById('boutonReponse');
    const boutonAutreBlague = document.getElementById('boutonAutreBlague');
    const texteBlague = document.getElementById('texteBlague');
    const texteReponse = document.getElementById('texteReponse');
    const blagueDiv = document.getElementById('blague');

    const blagues = [
        {
            question: "Pourquoi les plongeurs plongent-ils toujours en arrière ?",
            reponse: "Parce que sinon ils tombent dans le bateau."
        },
        {
            question: "Quel est le comble pour un électricien ?",
            reponse: "De ne pas être au courant."
        },
        {
            question: "Que fait une fraise sur un cheval ?",
            reponse: "Tagada tagada."
        }
    ];

    let blagueActuelle = 0;

    function afficherBlague(index) {
        texteBlague.textContent = blagues[index].question;
        texteReponse.textContent = "";
        blagueDiv.classList.remove('caché');
        boutonReponse.classList.remove('caché');
        texteReponse.classList.add('caché');
        boutonAutreBlague.classList.add('caché');
    }

    boutonBlague.addEventListener('click', function() {
        blagueActuelle = Math.floor(Math.random() * blagues.length);
        afficherBlague(blagueActuelle);
    });

    boutonReponse.addEventListener('click', function() {
        texteReponse.textContent = blagues[blagueActuelle].reponse;
        texteReponse.classList.remove('caché');
        boutonAutreBlague.classList.remove('caché');
    });
});
