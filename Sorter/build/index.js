"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NumbersCollection } from "./NumbersCollection";
// import { CharactersCollection } from "./CharactersCollection";
var LinkedList_1 = require("./LinkedList");
// const collection = new NumbersCollection([10000, 3665, -5, 0])
// const collection = new CharactersCollection("xznbkljebgouiqhgbajiero");
var collection = new LinkedList_1.LinkedList();
collection.add(500);
collection.add(-10);
collection.add(-3);
collection.add(4);
collection.sort();
// console.log(collection.data);
collection.print();
