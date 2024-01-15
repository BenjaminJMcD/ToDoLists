export default class Item {
    constructor(list, name, priority, notes, price, sets, reps, weight, key, subFolder, done) {
        this.list = list;
        this.name = name;
        this.priority = priority;
        this.notes = notes;
        this.price = price;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.key = key;
        this.subFolder = subFolder;
        this.done = done;
    }
}