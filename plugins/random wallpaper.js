async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://hardianto.xyz/api/anime/random?sfw=wallpaper&apikey=hardianto`, '', `NIH WALLPAPER`, m)
    
    }
    
    handler.help = ['randomwallpaper']
    
    handler.tags = ['anime']
    
    handler.command = /^(randomwallpaper)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler