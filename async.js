//Tache 01: Itération avec Async/Await

async function  iterateWithAsyncAwait(arr) {
    await new Promise(resolve => {
        arr.forEach((valeur, index) => {
            setTimeout(() => {
                console.log(valeur);
                if (index === arr.length - 1) resolve();
            }, index * 1000);
        });
    });
}

const myArray = [1, 2, 3, 4, 5];

 iterateWithAsyncAwait(myArray)

 
 //Tache 02: En attente d'un appel

 async function ApiCall() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = { message: "Données récupérées de l'API" };
            resolve(data);
        }, 2000);
    });
}

async function waitCall() {
    try {
        const data = await ApiCall();
        console.log("Données récupérées :", data);
    } catch (error) {
        console.error("échec de la récupération des données :", error);
    }
}

// Appel de la fonction 
waitCall();


//Tache 03: Chaînage Async/Await

async function asyncFunction1() {
    await wait(1000); 
    console.log("message fonction asynchrone 1");
}
async function asyncFunction2() {
    await wait(1000); 
    console.log("message fonction asynchrone 2");
}
async function asyncFunction3() {
    await wait(1000);
    console.log("message fonction asynchrone 3");
}
async function chainedAsyncFunctions() {
    await asyncFunction1(); 
    await asyncFunction2();
    await asyncFunction3(); 
}
// Appel de la fonction chainedAsyncFunctions
chainedAsyncFunctions();
