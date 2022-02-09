/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├🏧 082287219167 (OVO/Dana/GoPay)
├📍 -
└────
Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/17608914335 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c68b3ece-d10f-45c3-bdee-bb2ef415b41e/d6o9xrb-779e755b-c7d0-4c11-a438-c0d5058377ab.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2OGIzZWNlLWQxMGYtNDVjMy1iZGVlLWJiMmVmNDE1YjQxZVwvZDZvOXhyYi03NzllNzU1Yi1jN2QwLTRjMTEtYTQzOC1jMGQ1MDU4Mzc3YWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.myn2I-q6rQL0sDJ2SmsvwmWulRltJaOdllpW9LqrlLM' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Saweria',
               url: 'https://saweria.co/ilmanhdyt'
             }

           },
               {
             callButton: {
               displayText: 'Telkomsel',
               phoneNumber: '+62 813-5104-7727'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
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

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
