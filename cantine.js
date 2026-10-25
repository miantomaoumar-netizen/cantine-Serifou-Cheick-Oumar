// Définition des prix unitaires des plats
const prixunitaireAttiekePoisson = 1500;
const prixunitaireRizPoulet = 2000;
const prixunitaireAllocoOeuf = 1000;

// Définition des variables pour le client, le code du plat, la quantité et le montant versé
const client = "Awa";
const codePlat = 3;
const quantiteTexte = "4";
const quantite = Number(quantiteTexte);
const montantVerse = 4000;

// Fonction pour calculer le montant total
function calculerMontantTotal(prixunitaire, quantite) {
    return prixunitaire * quantite;
} 

// Détermination du nom du plat et du prix unitaire en fonction du code du plat
let nomPlat;
let prixunitaire;

// Vérification du code du plat et attribution des valeurs correspondantes
if (codePlat === 1) {
    nomPlat = "Attieke Poisson";
    prixunitaire = prixunitaireAttiekePoisson;
} else if (codePlat === 2) {
    nomPlat = "Riz Poulet";
    prixunitaire = prixunitaireRizPoulet;
} else if (codePlat === 3) {
    nomPlat = "Alloco Œuf";
    prixunitaire = prixunitaireAllocoOeuf;
} else {
    console.log("Code plat invalide");
}
// Calcul du montant total à payer
const montantTotal = calculerMontantTotal(prixunitaire, quantite);

// Affichage des informations de la commande
console.log("Client: " + client);
for (let i = 1; i <= quantite; i++) {
    console.log("Portion " + i + " : " + nomPlat + "  Prix unitaire: " + prixunitaire + " FCFA");
}

// Affichage du montant total et du montant versé
console.log("Total à payer: " + montantTotal + " FCFA");
console.log("Montant versé: " + montantVerse + " FCFA");

// Vérification si le montant versé est suffisant pour couvrir le montant total
if (montantVerse >= montantTotal) {
    const monnaie = montantVerse - montantTotal;
    console.log("Monnaie à rendre: " + monnaie + " FCFA");

} else {
    const montantManquant = montantTotal - montantVerse;
    console.log("Montant manquant est : " + montantManquant + " FCFA");
}