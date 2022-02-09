let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, `Iya Kak? ${conn.getName(conn.user.jid)} Online Ketik Aja *#menu* Untuk Melihat List Menu *${conn.getName(conn.user.jid)}* :)\n\nSilahkan Ketik #menu`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/17608914335?text=Hai',
mediaType: 2,
title: `Recode Bot Whatsapp`,
body: '© Kasumi Botz',
thumbnailUrl: 'https://static.wikia.nocookie.net/yuripedia/images/6/61/Return_of_the_Sakura_Season.png/revision/latest?cb=20191028194941',
}}}) 
}

handler.customPrefix = /^(bot|Bot)?$/i
handler.command = new RegExp

module.exports = handler