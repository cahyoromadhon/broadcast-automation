

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = true
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');
const { welcomeBanner, promoteBanner } = require("./library/welcome.js")

async function startingBot() {
const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState('session');
	
const Lexzy = await WAConnection({
version: (await (await fetch('https://raw.githubusercontent.com/kiuur/bails/refs/heads/master/lib/Defaults/baileys-version.json')).json()).version,
browser: ['ios', 'Chrome', '10.15.7'],
printQRInTerminal: !pairingCode, 
logger: pino({ level: "silent" }),
auth: state,
generateHighQualityLinkPreview: true,     
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By Cahyo'
}}})
	
if (pairingCode && !Lexzy.authState.creds.registered) {
let phoneNumber
phoneNumber = await question(chalk.blue.bold(`
  ░██████     ░███    ░██     ░██ ░██     ░██   ░██████   
 ░██   ░██   ░██░██   ░██     ░██  ░██   ░██   ░██   ░██  
░██         ░██  ░██  ░██     ░██   ░██ ░██   ░██     ░██ 
░██        ░█████████ ░██████████    ░████    ░██     ░██ 
░██        ░██    ░██ ░██     ░██     ░██     ░██     ░██ 
 ░██   ░██ ░██    ░██ ░██     ░██     ░██      ░██   ░██  
  ░██████  ░██    ░██ ░██     ░██     ░██       ░██████        
-----𝗠𝗔𝗦𝗨𝗞𝗜𝗡 𝗡𝗢 𝗟𝗨 𝗕𝗔𝗡𝗚-----:\n`))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
let code = await Lexzy.requestPairingCode(phoneNumber,"CAHYOROM");
code = code.match(/.{1,4}/g).join("") || code
await console.log(`${chalk.blue.bold('Kode Pairing')} : ${chalk.white.bold(code)}`)
}
	
Lexzy.ev.on('creds.update', await saveCreds)

Lexzy.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, receivedPendingNotifications } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.connectionLost) {
console.log('Connection to Server Lost, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startingBot()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection Timed Out, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.badSession) {
console.log('Delete Session and Scan again...');
startingBot()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Close current Session first...');
startingBot()
} else if (reason === DisconnectReason.loggedOut) {
console.log('Scan again and Run...');
exec('rm -rf ./session/*')
process.exit(1)
} else if (reason === DisconnectReason.Multidevicemismatch) {
console.log('Scan again...');
exec('rm -rf ./session/*')
process.exit(0)
} else {		
Lexzy.end(`Unknown DisconnectReason : ${reason}|${connection}`)
}}
if (connection == 'open') {
await Lexzy.newsletterFollow("120363416262862080@newsletter");
await Lexzy.newsletterFollow("120363419967954188@newsletter");
await Lexzy.newsletterFollow("120363420056838242@newsletter");
await Lexzy.newsletterFollow("120363418763241552@newsletter");
await Lexzy.newsletterFollow("120363419383077437@newsletter");
await Lexzy.newsletterFollow("120363420297405742@newsletter");
await Lexzy.newsletterFollow("120363417290289350@newsletter");
await Lexzy.newsletterFollow("120363420721152393@newsletter");
await Lexzy.newsletterFollow("120363400188426292@newsletter");
await Lexzy.newsletterFollow("120363402869710306@newsletter");
await Lexzy.newsletterFollow("120363394941015198@newsletter");
Lexzy.sendMessage(Lexzy.user.id.split(":")[0] + "@s.whatsapp.net", {text: `${`d[ o_0 ]b ✓`.toString()}`})
console.log(chalk.green.bold(`BOT TELAH TERSAMBUNG ✓\n\n`))
randomToken(Lexzy)
} else if (receivedPendingNotifications == 'true') {
console.log('Please wait About 1 Minute...')
}})

await store.bind(Lexzy.ev)	
await Solving(Lexzy, store)
	
Lexzy.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(Lexzy, message, store);
})

Lexzy.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
Lexzy.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
	
Lexzy.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await Lexzy.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await Lexzy.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await Lexzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await Lexzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await Lexzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await Lexzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return Lexzy

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});