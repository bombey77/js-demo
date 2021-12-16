// import getValue from "./modules/demo_1.js";
// import bottle from "./modules/demo_1.js";
import { default as spoon } from "./modules/demo_1.js";

const users = [
    { id: 101, name: 'John' },
    { id: 102, name: 'Kate' }
];

// getValue(users, 'id');
// getValue(users, 'name');


// bottle(users, 'id');
// bottle(users, 'name');


spoon(users, 'id');
spoon(users, 'name');