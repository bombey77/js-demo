import getValue from "./modules/demo_1.js";

const users = [
    { id: 101, name: 'John' },
    { id: 102, name: 'Kate' }
];

getValue(users, 'id');
getValue(users, 'name');