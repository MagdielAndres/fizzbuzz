const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Creando controller para conectar la funcionalidad con el server", () => { 
    test("Método para obtener la lista de explorers filtrados por misión", () => { 
        const listaExplorersByMision = ExplorerController.getExplorersByMission("node");
        expect(listaExplorersByMision).toEqual([
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

    test("Método que regresa la lista de usernames de los explorers filtrados por la misión", () => { 
        const listExplorersUsername = ExplorerController.getExplorersUsernamesByMission("node");

        expect(listExplorersUsername).toEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5"]);
    });

    test("Método que regresa la cantidad de explorers en la misión enviada", () => { 
        const amountExplorersInMission =  ExplorerController.getExplorersAmounttByMission("node");

        expect(amountExplorersInMission).toBe(5);
    });

});