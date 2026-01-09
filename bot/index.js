const TelegramBot = require('node-telegram-bot-api');
const db = require('../models')
const userController = require('../controllers/user.controller');

const bot = new TelegramBot('Token',{polling: true})

bot.onText(/\/start/,(msg)=> userController.start(bot,msg));
bot.onText(/\/balance/,(msg)=> userController.balance(bot,msg))
bot.onText(/\/add_balance\s+(\d+)\s+(\d+)/,async (msg,match)=>{
    
    let amount = parseInt(match[1])
    let id = match[2]

    let user = await users.findOne({
        where:{
            telegramID:msg.from.id
        },
        include: [{
            model: roles
        }]
    })
//SELECT * FROM users u WHER u.id = msg.from.id JOIN roles r ON r.id = u.roleId;

    if(user.role.name == 'admin'){
        // console.log('admin is allowed')
        await userController.addBalance_admin(amount,id)
    }else{
        bot.sendMessage(
            msg.chat.id,
            `you are not allowed`
        )
    }
    
})
bot.on('message', (msg) => userController.addBalance(1,msg));

module.exports = bot