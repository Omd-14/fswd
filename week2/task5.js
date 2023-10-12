const fs = require('fs');
const list = () =>{
    try{
    const readData = fs.readFileSync('employee.json');
    const datajson = JSON.parse(readData)
    return  datajson 
    }catch(e){
        return [];
    }
}
const data = process.argv[2]
let arr =[]
arr  = list()
arr.push({name : data})

fs.writeFileSync('employee.json',
    JSON.stringify(arr) 
)

arr  = list()
console.log(arr)
