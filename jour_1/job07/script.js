function jourTravaille(date){

    const tableau_mois = ["janvier", "février", "mars", "avril", "mai", "juin", 
                "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    const jourFeries = ["1/01/2024", "01/04/2024", "01/05/2024", "08/05/2024", "09/05/2024", "20/05/2024", "14/07/2024", "15/08/2024","01/11/2024", "11/11/2024","25/12/2024"];

    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    if(jour < 10){
        jour = "0" + jour;
    }

    if(mois < 10){
        mois = "0" + mois;
    }

    const dateFormatee = jour + "/" + mois + "/" + annee;
    const nomMois = tableau_mois[date.getMonth()];

    if(jourFeries.includes(dateFormatee)){
        console.log("Le " + dateFormatee + " est un jour férié.");
    } else if(date.getDay() === 0 || date.getDay() === 6){
        console.log("Le " + dateFormatee + " est un week-end.");        
    } else{
        console.log("Le " + dateFormatee + " est un jour travaillé.");
    }
}

jourTravaille(new Date("2024-08-15"));
jourTravaille(new Date("2024-12-06"));
jourTravaille(new Date("2024-06-22"));
jourTravaille(new Date("2024-07-14"));