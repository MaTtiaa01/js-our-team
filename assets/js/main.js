/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
    -use FOR in the ourTeam array to select each member
    -log in console every property of each member 


MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    -pick a dom element with querySelector
    -add the element p with js
        -use createElement and insertAdjacentElement

BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

const constainerEl = document.querySelector(".container")
let cardMarkup;

const ourTeam = [
    {
        name: "Walter Gordon",
        role: "Chief editor",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social media manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Wayne Barnett",
        role: "Founder CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief editor",
        image: "angela-caroll-chief-editor.jpg"
    }
]


for (let i = 0; i < ourTeam.length; i++) {
    const member = ourTeam[i];
    console.log(member);
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
    // cardMarkup = document.createElement("div")
    // constainerEl.insertAdjacentElement("beforeend", cardMarkup);
    constainerEl.innerHTML += member.name + member.role + member.image;
}