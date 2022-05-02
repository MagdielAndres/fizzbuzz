const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMssion(mission);
    }
}
module.exports = ExplorerController;