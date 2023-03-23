let mynum = 123456;

// mynum =  mynum.toLocaleString("en-US", {style: "currency", currency: "USD"});
mynum =  mynum.toLocaleString("en-IN", {style: "unit", unit: "celsius"});

console.log(mynum);
