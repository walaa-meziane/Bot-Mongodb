const users = require("../models/users.model")
const roles = require("../models/roles.model")

exports.findOrCreateUser = async (msg) =>{
    const [user,created] = await users.findOrCreate({
        where:{
            telegramID:msg.from.id
        },
        defaults:{
            userName:msg.from.username
        }
    })

    if(created){
        const role = await roles.findOne({
            where:{
                name:'noob'
            }
        })
        await  user.setRole(role)
    }
    
    return user
}

exports.addCoin = async (telegramID,amount)=>{
    const user = await users.findOne({
        where:{
            telegramID:telegramID
        }
    })

    console.log(user)

    user.coins += amount

    await user.save();

    return user
}