const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'http://images6.fanpop.com/image/photos/36100000/Togashi-Yuuta-image-togashi-yuuta-36129224-1192-670.jpg'
let botol = global.wm
let str = `
✧────[ *Group Official* ]────✧
🍀 Group 1 :
https://chat.whatsapp.com/EZT51mPq69162pfM3afL1h
🍀 Group 2 :
https://chat.whatsapp.com/GF2h60JQd1I2VwnNT8dIof
🍀 Group 3 :
https://chat.whatsapp.com/Hjr3H7l9iC8F2deP0cv6GT
🍀 Group 4 :
https://chat.whatsapp.com/G64RpCwl8MrLQ66xfghI1F
🍀 Group 5 :
https://chat.whatsapp.com/DYbwxUvMEzTEsOuYQnBDm2
✧──────────···────────✧
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: fs.readFileSync('./media/yuta.jpg') },           
          hydratedFooterText: wm,
          hydratedButtons: [{
            urlButton: {
              displayText: 'Group Official',
              url: 'https://chat.whatsapp.com/EZT51mPq69162pfM3afL1h'
            }

          },
              {
            quickReplyButton: {
              displayText: 'Back To Menu',
              id: '.menu',
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
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler