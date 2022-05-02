const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./test/explorersTest.json");
        return ExplorerService.filterByMssion(explorers, mission);
    }

}
module.exports = ExplorerController;