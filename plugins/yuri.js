async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random2/yuri?apikey=Deffbotz`, '', `Kau Sange?`, m)
    
    }
    
    handler.help = ['yuri']
    
    handler.tags = ['nsfw']
    
    handler.command = /^(yuri)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler