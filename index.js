const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("ODU3NTE4MzQ2MTE4MzY1MjE1.YNQwMQ.fRISnz4HOjm8PaBfPGFIuSdJ8AY") //Your own token, thus one sadly won't work :P
