const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const [a,b]=pays;
const [,,c]=pays;
console.log(a);
console.log(b);
console.log(c);
const [destinationPrincipale,...autre]=pays;
console.log(destinationPrincipale);
console.log(autre);
const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};
const {destination , prix}=voyage;
console.log(destination);
console.log(prix);
const {destination:ville}=voyage;
console.log(ville);
const {p=1000,duree=7}=voyage;
console.log[prix];
console.log[duree];
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Destination :", destination);
    console.log("Prix :", prix);
    console.log("Durée :", duree);
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}

afficherVoyage(voyage);