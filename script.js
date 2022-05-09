//déclaration des variables
const btnnew = document.getElementById('btnnew');
const btnroll = document.getElementById('btnroll')
const btnvd = document.getElementById('valeurd')
const ind = document.getElementById('index')
const idx = ind.value
const ro1 = document.getElementById('round1')
const ro2 = document.getElementById('round2')
const to1 = document.getElementById('total1')
const to2 = document.getElementById('total2')


// initialisation sur chargement de la page
window.onload = function () {
    newgame()
};


//fonction pour l'initialisation du jeu
function newgame() {

    let r1 = 0;
    let r2 = 0;
    let t1 = 0;
    let t2 = 0;
    let i = 0;

    ro1.value = r1
    ro2.value = r2
    to1.value = t1
    to2.value = t2
    ind.value = i
// on affiche le rond rouge du joueur actif
    document.getElementById('ip1').style.display = 'block'
    document.getElementById('ip2').style.display = 'none'

    affich()
}


//fonction sur lancement du dé
function rollback() {
    //récupération de l'index pour connaitre le joueur actuel
    let idx = ind.value;

    // valeur aléatoire du dé
    let vd = Math.round(Math.random() * (6 - 1) + 1);


    //affichage de l'image en fonction de la valeur du dé
    switch (vd) {
        case 1:
            document.getElementById('imagede').src = "img/de/de_un.png";
            break;
        case 2:
            document.getElementById('imagede').src = "img/de/de_deux.png";
            break;
        case 3:
            document.getElementById('imagede').src = "img/de/de_trois.png";
            break;
        case 4:
            document.getElementById('imagede').src = "img/de/de_quatre.png";
            break;
        case 5:
            document.getElementById('imagede').src = "img/de/de_cinq.png";
            break;
        case 6:
            document.getElementById('imagede').src = "img/de/de_six.png";
            break;
    }

    //on attribue la valeur du dé à l'input du dé
    btnvd.value = vd;

    // traitement si la valeur du dé est de 1
    if (vd == 1) {

        alert('Vous avez fait 1 ! Changement de joueur ');

        let idx = ind.value;

// si player1
        if (idx == 0) {
            //on met la valeur du round à 0 pour player1
            ro1.value = 0
            //on change de joueur
            ind.value = 1
            // on affiche le rond rouge du joueur actif
            document.getElementById('ip1').style.display = 'block'
            document.getElementById('ip2').style.display = 'none'
//sinon player2
        } else {
            //on met la valeur du round à 0 pour player2
            ro2.value = 0
            ind.value = 0
            document.getElementById('ip1').style.display = 'none'
            document.getElementById('ip2').style.display = 'block'
        }

    } else {

// si la valeur du dé est différente de 1
        // le joueur actif est player1
        if (idx == 0) {
            //on récupère la valeur du round
            let a = parseInt(ro1.value);
            //on additionne la valeur du dé à son round actuel
            let b = a + vd;
            // on attribue la valeur de son round à l'input round player1
            ro1.value = b
            //on affiche le point du joueur actif
            document.getElementById('ip1').style.display = 'block'
            document.getElementById('ip2').style.display = 'none'

            affich()

        } else {
            // le joueur actif est player2
            //on récupère la valeur de son round actuel
            let a = parseInt(ro2.value);
            //on l'additionne à la valeur du dé
            let b = a + vd;

            //on affecte la nouvelle valeur du round à l'input round player2
            ro2.value = b
            //on affiche le point du joueur actif
            document.getElementById('ip1').style.display = 'none'
            document.getElementById('ip2').style.display = 'block'
            affich()

        }
    }
}


// function qui gère la conservation des points du round
function keep() {
    // on récupère l'index pour connaitre le joueur actif
    let idx = ind.value;

    // si l'index vaut 0 , le joueur actif est player1
    if (idx == 0) {
        //on récupère la valeur du round en cours
        let round = parseInt(ro1.value);
        // on récupère la valeur du global player1
        let global = parseInt(to1.value);

        //on additionne la valeur du round à celle du global
        let gb = global + round;

        //on met à 0 la valeur du round player1
        ro1.value = 0
        // on affecte le nouveau global à l'input global player1
        to1.value = gb
        // on change de joueur actif
        ind.value = 1

        //on affiche le point du player2, le nouveau joueur actif
        document.getElementById('ip1').style.display = 'none'
        document.getElementById('ip2').style.display = 'block'

        //on test pour savoir si le joueur a dépassé les 100 point et donc gagné
        if (gb >= 100) {
            alert('VOUS AVEZ GAGNE !')
            newgame()
        }
        affich()
    } else {
        //le joueur actif est le player2

        // on récupère la valeur du round player2
        let round = parseInt(ro2.value);
        // on récupère la valeur du global player2
        let global = parseInt(to2.value);

        //on additionne la valeur du round à celle du global
        let gb = global + round;

        //on met à 0 la valeur du round player2
        ro2.value = 0
        // on affecte le nouveau global à l'input global player2
        to2.value = gb

        //on test pour savoir si le joueur a dépassé les 100 point et donc gagné
        if (gb >= 100) {
            alert('VOUS AVEZ GAGNE !')
            newgame()
        }

        //on remet player1 actif
        ind.value = 0
        // on affiche le point actif du player1 et on cache celui de player2
        document.getElementById('ip1').style.display = 'block'
        document.getElementById('ip2').style.display = 'none'
        affich()
    }

}

//appel de la fonction newgame sur click du bouton newgame
btnnew.addEventListener('click', newgame);
//appel de la fonction rollback sur click du bouton rollback
btnroll.addEventListener('click', rollback);
//appel de la fonction keep sur click du bouton hold
btnkeep.addEventListener('click', keep);


// fonction permettant d'afficher les scores du round et global
function affich() {
    document.getElementById("roundplayer1").innerHTML = ro1.value;
    document.getElementById("roundplayer2").innerHTML = ro2.value;
    document.getElementById("totalplayer1").innerHTML = to1.value;
    document.getElementById("totalplayer2").innerHTML = to2.value;
}
