const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

let str = `
┌─〔 R U N T I M E 〕
├ Bot Aktif Selama ${uptime}
└────
    `.trim()
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
              hydratedContentText: str,
              locationMessage: { 
              jpegThumbnail: fs.readFileSync('./media/entah.jpg') },           
              hydratedFooterText: wm,
              hydratedButtons: [{
                urlButton: {
                  displayText: 'Group Official',
                  url: 'https://chat.whatsapp.com/EZT51mPq69162pfM3afL1h'
                }
   
              },
                  {
                quickReplyButton: {
                  displayText: 'PING',
                  id: '.ping',
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
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
