const fs = require('fs')
class Reader {
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
// const explorers1 = Reader.readJsonFile("explorers.json")
// console.log(explorers1)
module.exports = Reader