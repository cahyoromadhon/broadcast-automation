/* CREADIT YT Lexzymarket WA 08176012367 
PASTIKAN NO REAL & AKTIF DI SALURAN SAYA 
 https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16 
#DILARANG HAPUS CREADIT HARGAI PEMBUAT SCRIPT 
#-TERIMAKASIH SALAM CUAN
#-YG GA HAPUS SAYA DOAIN REZEKINYA NGALIR TERUS AAMIN
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6285930467004'
global.versi = version
global.namaOwner = "⏤͟͟͞͞𝐋𝐞𝐱𝐳𝐲给"
global.packname = 'Lexzy - Marketplace'
global.botname = 'Simpel Bot Lexzy'
global.botname2 = 'Simple Bot'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/628176012367"
global.linkGrup = ""

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 3500

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16"
global.idSaluran = "120363416262862080@newsletter"
global.namaSaluran = "YT LEXZYMARKET ALLWAYS SOLO"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = ""
global.apiOrderKuota = ""
global.qrisOrderKuota = ""

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "apikey1"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "Tidak Tersedia"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/tr51xx.jpg", 
reply: "https://b.top4top.io/p_3279htla70.jpg", 
logo: "https://files.catbox.moe/tr51xx.jpg", 
qris: "https://files.catbox.moe/gqshqv.jpg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = ""
global.apikey = "" //ptla
global.capikey = "" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://lexzymarket.com"
global.apikeyV2 = "ptla_lfucQxgxJ2q9YARtJmIBMqE0nbAP0DqgULZV4XyTepP" //ptla
global.capikeyV2 = "ptlc_6HPcjlup1PXA1U7AxMq5dA5s2D612xs7j93Pqd743rK" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})