const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
class BotTelegram{
    static fizzbuzzAndNamebyMission(){
        
        process.env.NTBA_FIX_319=1;
        require("dotenv").config();
        const token = process.env.TOKEN;
        console.log(token);

        const bot = new TelegramBot(token, {polling: true});
        // console.log(bot);

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
           
            let coverMission = msg.text.toLowerCase();
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getValidationNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            }else if(coverMission === "node" || coverMission === "java"){
                const nombresExplorers = ExplorerController.getExplorersUsernamesByMission(coverMission);
                const responseBot = `Mission: ${msg.text}. Nombres de los explores:  ${nombresExplorers}`;
                bot.sendMessage(chatId, responseBot);
            }else{
                bot.sendMessage(chatId, "Envía un número ó una mission (node, java) válido");       
            }
        
        });
    }
}
BotTelegram.fizzbuzzAndNamebyMission();

module.exports = BotTelegram;