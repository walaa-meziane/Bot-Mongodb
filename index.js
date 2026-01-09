const connectDB = require("./config/db.config")
const roles = require("./models/roles.model")

connectDB();
require('./bot')

let roles = ['admin','noob','junior','senior']

async function main(){
    try{
        for(let role of roles){
           await roles.create({
                name:role
            })
        }

        const role = await roles.findOne({
            where:{
                name : 'admin'
            }
        })

        const admin = await users.create({
            telegramID:1701682483,
            userName:'ousslr',
            coins:99999
        })
        await admin.setRole(role)
        console.log('bot is running...')
    }catch(e){
        console.error(e)
    }
}

main()



