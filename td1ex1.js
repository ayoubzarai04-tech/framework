 const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
destinations.forEach(v=>console.log(`ville : ${v.ville}`));
const n=destinations.map(n=>n.ville);
console.log(n);
const u=destinations.filter(u=>u.prix<1500);
console.log(u);
const d=destinations.find(d=>d.id===3);
console.log(d);
const p=destinations.findIndex(p=>p.ville="Tokyo");
console.log(p);
const s=destinations.some(s=>s.disponible);
console.log(s);
const e=destinations.every(e=>e.prix>0);
console.log(e);
const totale=destinations.reduce((somme,r)=>somme+r.prix,0);
console.log("totale de prix :"+totale);

