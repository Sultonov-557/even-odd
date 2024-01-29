const fs = require("fs");

const writeStream = fs.createWriteStream(__dirname + "/index.js");

writeStream.write("(async ()=>{");
writeStream.write("const input=await require('input').text('number: ')\n\n");
writeStream.write("if(input==0){console.log('even')}\n");

const limit = 1000000;

for (let i = 1; i <= limit; i++) {
	writeStream.write(`else if(input==${i}){console.log('${i % 2 ? "odd" : "even"}')}\n`);
}

writeStream.write("})()");
