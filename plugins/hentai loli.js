async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`, '', `SANGE AMA ANAK KECIL?`, m)
    
    }
    
    handler.help = ['hentailoli']
    
    handler.tags = ['nsfw']
    
    handler.command = /^(hentailoli)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler