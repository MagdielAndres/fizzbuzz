const Reader = require('./../utils/Reader')

class ExplorerService {
    static filterByMssion(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }
}



module.exports = ExplorerService

// const explorers = Reader.readJsonFile("./test/explorersTest.json")

// const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// console.log(explorersInNode)