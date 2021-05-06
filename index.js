const config = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on('message', message => {
if (message.content.includes("discord.gg")) {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setDescription(`You cannot send invite links here ${message.author}`)
    .setColor('#2f3136')
    return message.channel.send(embed)
}
if (message.content.includes("www.")) {
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setDescription(`You cannot send links here ${message.author}`)
    .setColor('#2f3136')
    return message.channel.send(embed)
}
if (message.content.includes("https://")) {
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setDescription(`You cannot send links here ${message.author}`)
    .setColor('#2f3136')
    return message.channel.send(embed)
}
}) 
client.login(config.token)