const length=process.argv.length
let sum =0
for(let counter=2;counter<lengthArgv;counter++){
    sum+=Number(process.argv[counter])
}
console.log(sum)