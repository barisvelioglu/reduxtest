import store from "./store"
import compiled from './templates/header.hbs'
import localforage from "localforage";

const app = document.getElementById('app')

localforage.config({
    driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});

localforage.getItem('key', function (err, value) {
  console.log("||||||||||||||||||||||||||||||||||||||||")
  console.log(value);
});

app.innerHTML = compiled({name: "world"});
