export default function subFolderTotal (page) {

    let storageArray = [];

    if (localStorage.length !== 0) {
        for (let i=0; i<localStorage.length; i++) {
            storageArray.push(JSON.parse(localStorage.getItem(i)));
        }
    }

    let subTotal = 0;

    for (let i=0; i<storageArray.length; i++) {
        if (storageArray[i].list == page && storageArray[i].price != null) {
            let priceAsNumber = parseFloat(storageArray[i].price);
            subTotal += priceAsNumber;
        }
    }

    return subTotal;
}