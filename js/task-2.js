class Storage{
#item;
constructor(item){
this.#item = item;
}

getItems() {return this.#item} 
addItem(newItem) {this.#item.push(newItem)}
removeItem(itemToRemove) {const indexItem = this.#item.indexOf(itemToRemove);
    this.#item.splice(indexItem, 1)}
};


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
storage.addItem("Droid");
console.log(storage.getItems()); 
storage.removeItem("Prolonger");
console.log(storage.getItems()); 