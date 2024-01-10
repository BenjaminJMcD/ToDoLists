import getLocalStorage from "./getLocalStorage";

export default function subFolderTotal (subList) {

    let storageArray = [];

    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            storageArray.push(JSON.parse(localStorage.getItem(i)));
        }
    }

    let subTotal = 0;

    for (let i=0; i<storageArray.length; i++) {
        if (storageArray[i].subFolder == subList) {

            let priceAsNumber = parseFloat(storageArray[i].price);
            console.log(priceAsNumber)
            subTotal += priceAsNumber;
        }
    }

    return subTotal;
}