//retourne le nom du signe
export function getZodiacSign (day, month) {
            
    let signAstro = "n'existe pas";
    
    if (month > 0 && day > 0 && month <= 12 && day <= 31) {
    if ((month === 1 && day >=21) || (month === 2 && day <=19)) {signAstro = "Verseau";}
    if ((month === 2 && day >=20) || (month === 3 && day <=20)) {signAstro = "Poissons";}
    if ((month === 3 && day >=21) || (month === 4 && day <=20)) {signAstro = "Bélier";}
    if ((month === 4 && day >=21) || (month === 5 && day <=21)) {signAstro = "Taureau";}
    if ((month === 5 && day >=22) || (month === 6 && day <=21)) {signAstro = "Gémeaux";}
    if ((month === 6 && day >=22) || (month === 7 && day <=22)) {signAstro = "Cancer";}
    if ((month === 7 && day >=23) || (month === 8 && day <=22)) {signAstro = "Lion";}
    if ((month === 8 && day >=23) || (month === 9 && day <=22)) {signAstro = "Vierge";}
    if ((month === 9 && day >=23) || (month === 10 && day <=22)) {signAstro = "Balance";}
    if ((month === 10 && day >=23) || (month === 11 && day <=22)) {signAstro = "Scorpion";}
    if ((month === 11 && day >=23) ||(month === 12 && day <=21)) {signAstro = "Sagittaire";}
    if ((month === 12 && day >=22) || (month === 1 && day <=20)) {signAstro = "Capricorne";}
    } 

    return signAstro;
  };
  
// retourne l'image du signe
  export function getZodiacImage (sign) {
            
    let signImage = "Le signe pas reconnu!";
    
    if(sign === "Pas connu") { signImage = "https://cdn.leonardo.ai/users/71c20f60-26b3-4aa5-9c42-29d68b249aa6/generations/fc60b66a-9a67-4927-917b-86a8a97f775c/Default_signes_astrolgie_3.jpg";}
    if (sign === "Verseau") { signImage = "https://www.santeplusmag.com/wp-content/uploads/Verseau-Traits-de-personnalite-de-ce-signe-du-zodiaque-1200x628.jpg";} 
    if (sign === "Poissons") { signImage = "https://www.demotivateur.fr/images-buzz/pisces67546.jpg";} 
    if (sign === "Bélier") { signImage = "https://www.santeplusmag.com/wp-content/uploads/Belier-traits-de-personnalite-de-ce-signe-du-zodiaque-1200x628.jpg";} 
    if (sign === "Taureau") { signImage = "https://www.santeplusmag.com/wp-content/uploads/Taureau-Traits-de-personnalite-de-ce-signe-du-zodiaque-1200x628.jpg";} 
    if (sign === "Gémeaux") { signImage = "https://img-3.journaldesfemmes.fr/ZrZ7OthZEXxJuZ_1SgKLV14lC-4=/1500x/smart/aba95eb178eb42b2b4897cbcfeb0f511/ccmcms-jdf/39590370.jpg";} 
    if (sign === "Cancer") { signImage = "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/star-sign-4374406_1920_62ac476810156.jpg?itok=QMisrkXf";} 
    if (sign === "Lion") { signImage = "https://img.freepik.com/photos-premium/signes-astrologiques-du-zodiaque-du-lion-horoscope-lion_597582-570.jpg";} 
    if (sign === "Vierge") { signImage = "https://cdn.leonardo.ai/users/71c20f60-26b3-4aa5-9c42-29d68b249aa6/generations/0177cdad-228e-44ec-95d9-039ee069d70b/Default_horoscope_vierge_0.jpg";} 
    if (sign === "Balance") { signImage = "https://cdn.leonardo.ai/users/71c20f60-26b3-4aa5-9c42-29d68b249aa6/generations/1f358971-c2c7-4d90-98d2-8e407d5274b9/Default_balance_horoscope_3.jpg";} 
    if (sign === "Scorpion") { signImage = "https://cdn.leonardo.ai/users/71c20f60-26b3-4aa5-9c42-29d68b249aa6/generations/4334c3c9-a624-4044-98de-d66c774645a4/Default_horoscope_scorpion_0.jpg";} 
    if (sign === "Sagittaire") { signImage = "https://www.santeplusmag.com/wp-content/uploads/Sagittaire-Portrait-astrologique-de-ce-signe-du-zodiaque-1200x628.jpg";} 
    if (sign === "Capricorne") { signImage = "https://cdn.leonardo.ai/users/71c20f60-26b3-4aa5-9c42-29d68b249aa6/generations/a7d841a6-d49e-4365-9bb3-7b50b28931e4/Default_capricorne_astrolgie_2.jpg";} 

    return signImage;
  };