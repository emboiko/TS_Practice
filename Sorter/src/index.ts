import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const collection = new NumbersCollection([10000, 3665, -5, 0])
// const collection = new CharactersCollection("xznbkljebgouiqhgbajiero");

const collection = new LinkedList();
collection.add(500);
collection.add(-10);
collection.add(-3);
collection.add(4);


collection.sort();
// console.log(collection.data);
collection.print();
