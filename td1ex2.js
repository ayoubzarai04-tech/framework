const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];
const confirme=reservations.filter(m=>m.statut==="Confirmée");
console.log("le statut confirme est :",confirme);
const nom=reservations.map(m=>m.client);
console.log("le nom de client est :",nom);
const num=reservations.find(m=>m.numero===103);
const somme=confirme.reduce((somme,m)=>somme+m.montant,0);
console.log("la somme est :",somme);
const verif=reservations.every(m=>m.statut==="Confirmée");
console.log("la verification :"+verif);
const tab=reservations.map(m=>({client :m.client
    , destinations:m.destination
}));
console.log(tab);
