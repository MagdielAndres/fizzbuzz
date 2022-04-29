const Reader = require('./../utils/Reader')

class ExplorerService {
    static filterByMssion(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

}

module.exports = ExplorerService

// const explorers = Reader.readJsonFile("explorers.json")

// const explorersInNode = ExplorerService.filterByMssion(explorers, "node");
// console.log(explorersInNode)