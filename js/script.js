function genererContenu() {
    // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
    let demo = document.getElementById("demo");
    let sections = document.getElementById("qty").value;
    let conversion = parseInt(sections);
    let titre = document.getElementById("titre").value;
    let texte = document.getElementById("contenu").value;

   

    for (let i = 0; i < conversion; i++) {
        let h2 = document.createElement("h2");
        h2.textContent = titre + " " + i;
        demo.appendChild(h2);
        let p = document.createElement("p");
        p.textContent = texte + " " + i;
        demo.appendChild(p);
    } 
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
    let demo = document.getElementById("demo");
    let cor = document.getElementById("couleur").value;
    let listeP = demo.getElementsByTagName("p");

    for (let i = 0; i < listeP.length; i++) {
        listeP[i].style.color = cor;
    }


}
  
function changerClassBoutons() {
    // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

    let butao = document.getElementById("btnClass").value;
    let listeButao = document.getElementsByTagName("button");

    for (let i = 0; i < listeButao.length; i++) {
        listeButao[i].className = butao;
    }



}