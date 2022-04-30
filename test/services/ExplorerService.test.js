const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')

describe('Class ExplorerService: 3 Métodos estaticos y obtener informacion', () => { 
    const explorers = Reader.readJsonFile('./test/explorersTest.json');

    test('Método static filterByMission: filtarr por misión node', () => {         
        
        const explorersInNode =  ExplorerService.filterByMssion(explorers, "node");

        expect(explorersInNode).toEqual([
            {
              "name": "Woopa1",
              "githubUsername": "ajolonauta1",
              "score": 1,
              "mission": "node",
              "stacks": [
                "javascript",
                "reasonML",
                "elm"
              ]
            },
            {
              "name": "Woopa2",
              "githubUsername": "ajolonauta2",
              "score": 2,
              "mission": "node",
              "stacks": [
                "javascript",
                "groovy",
                "elm"
              ]
            },
            {
              "name": "Woopa3",
              "githubUsername": "ajolonauta3",
              "score": 3,
              "mission": "node",
              "stacks": [
                "elixir",
                "groovy",
                "reasonML"
              ]
            },
            {
              "name": "Woopa4",
              "githubUsername": "ajolonauta4",
              "mission": "node",
              "score": 4,
              "stacks": [
                "javascript"
              ]
            },
            {
              "name": "Woopa5",
              "githubUsername": "ajolonauta5",
              "score": 5,
              "mission": "node",
              "stacks": [
                "javascript",
                "elixir",
                "elm"
              ]
            }
          ]);
    });

    test('Método stati getAmountOfExplorersByMission: Obtener la cantidad de explorers por misión node ', () => { 
      const explorersInNode =  ExplorerService.getAmountOfExplorersByMission(explorers, "node");

      expect(explorersInNode).toBe(5)
  });
});