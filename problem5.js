let obj = [
  { id: 3, fname: "Chris" },
  { id: 4, fname: "Danny" },
  { id: 2, fname: "Bran" },
  { id: 1, fname: "Alex" },
];

obj.sort((a, b) => (a.id > b.id ? 1 : -1));
console.log(obj);
