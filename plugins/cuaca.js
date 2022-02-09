/**
diupload oleh https://github.com/uhdahlah
**/

let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerah', m)

  await m.reply('Searching...')
	axios.get(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=Deffbotz`).then ((res) => {
	 	let hasil = `Cuaca Daerah *${text}*\n\nTempat : ${res.data.tempat}\nAngin : ${res.data.angin}\nCuaca : ${res.data.cuaca}\nDeskripsi : ${res.data.description}\nKelembapan : ${res.data.kelembapan}\nSuhu : ${res.data.suhu}\nUdara : ${res.data.udara}\nPermukaan laut :${res.data.permukaan_laut}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cuaca'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(cuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
