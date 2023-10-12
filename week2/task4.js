const fs = require('fs');

const data = fs.readFileSync('./MyInfo.txt',{
    encoding: 'utf-8',
    flag: 'r'
});
const datajson = JSON.parse(data)
console.log(datajson)
for(let i in datajson)
{
    if(datajson[i].Name.match("Ma") && datajson[i].CGPA > 7)
        console.log(datajson[i])
}
