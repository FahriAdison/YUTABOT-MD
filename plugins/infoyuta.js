const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => { 
let str = `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ (Sekali Kali Face :v)
│ ✎ Nama : Yuta (cowok)
│    Kelas : 9 SMP
│    Umur : 15
│    Asal : Riau
│    Kabupaten: Indragiri Hulu
│    Status : Privasi
│    Suka : Jepang,Coding/Recode,B.Inggris
│ ✎ _Official Grup_ :
│    bit.ly/OfficalGroupYuta
│ ✎ _Instagram_ :
│    bit.ly/InstagramYuta
│ ✎ _YouTube_ : 
│    bit.ly/YoutubeYuta
│ ✎ _FaceBook_ :
│    (Private)
│ ✎ _WhatsApp_ :
│    bit.ly/WhatsAppYuta
╰‿‿‿‿‿‿‿‿
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: fs.readFileSync('./media/face.jpg') },           
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

handler.help = ['infoowner']
handler.tags = ['info']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
