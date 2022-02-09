async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/nsfw/blowjob?apikey=apirey`, '', `Kau Sange?`, m)
    
    }
handler.help = ['blowjob']
handler.tags = ['nsfw']

handler.command = /^(blowjob)$/i

handler.limit = true
handler.nsfw = true
handler.group = false
handler.premium = true 

    module.exports = handler