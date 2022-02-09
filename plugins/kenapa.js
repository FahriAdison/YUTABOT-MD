let handler = async (m, { conn, text }) => {
    conn.reply(m.chat, `
  *Pertanyaan:* ${m.text}
  *Jawaban:* ${pickRandom(['Yo Ndak Tau Kok Tanya Saya','MANA GWEH TEHEK,TANYA SAMA KETEK','KARNA LO WIBU','KARNA LU BEBAN','KARENA ANTUM BIRAHI KAN?','KARENA LU YTEAM','KARENA DIA SUKA SAMA LO','KARENA LO GAK PUNYA AYANG','KARENA LO BURIK'])}
  `.trim(), m, m.mentionedJid ? {
      contextInfo: {
        mentionedJid: m.mentionedJid
      }
    } : {})
  }
  handler.help = ['kenapa <teks>?']
  handler.tags = ['kerang']
  handler.customPrefix = /(\?$)/
  handler.command = /^kenapa/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }
  
  