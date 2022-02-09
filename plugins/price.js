const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let premium = `
*Kasumi BOT PRICE*

◩ *FREE USER*
└───────
 └❎ Unlimited Limit
 └❎ Premium User 
 └❎ Add Bot to Group 
  
◩ *PREMIUM USER*
└───────
 └✅ Unlimited Limit 
 └✅ Premium User 
 └✅ Add Bot to Group 
   └  ▹  *Rp. 0*
     └ Expired No
 └ Order | hub : owner
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: premium,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Group Official',
               url: 'https://chat.whatsapp.com/EZT51mPq69162pfM3afL1h'
             }

           },
               {
             quickReplyButton: {
               displayText: 'OWNER',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['price']
handler.tags = ['premium']
handler.command = /^(price)$/i

module.exports = handler