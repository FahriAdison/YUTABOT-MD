async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://hardianto.xyz/api/anime/random?sfw=foxGirl&apikey=hardianto`, '', `:3`, m)
    
    }
    
    handler.help = ['foxgirl']
    
    handler.tags = ['anime']
    
    handler.command = /^(foxgirl)$/i
    
    handler.owner = false
    
    handler.mods = false
    
    handler.premium = false
    
    handler.group = false
    
    handler.private = false
    
    
    
    handler.admin = false
    
    handler.botAdmin = false
    
    
    
    handler.fail = null
    
    
    
    module.exports = handler