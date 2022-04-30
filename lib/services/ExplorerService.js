const Reader = require('./../utils/Reader');

class ExplorerService {
    static filterByMssion(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers,mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}



module.exports = ExplorerService;

// const explorers = Reader.readJsonFile("./test/explorersTest.json")

// const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
// console.log(explorersInNode)