let { MessageType } = require('@adiwajshing/baileys-md')
const potion = 1500
const Spotion = 750 
const Sgold = 3000
const Bgold = 6000
const Bstring = 500
const Sstring = 200
const Bbatu = 500
const Sbatu = 200
const Bkayu = 500
const Skayu = 200
const Biron = 900
const Siron = 700
const limit = 500
const Slimit = 250
const Ufishing = 25000
const Upickaxe = 25000
const Bdiamond = 25000
const Sdiamond = 12500
const Bcommon = 10000
const Scommon = 5000
const Suncommon = 5000
const Buncommon = 2500
const Bmythic = 25000 
const Smythic = 13000
const Blegendary = 30000 
const Slegendary = 15000
const Bsampah = 9000
const Ssampah = 3500
const budak = 5000
const Btprem = 9000000000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const _sword = global.db.data.users[m.sender].sword
    const _budak = global.db.data.users[m.sender].budak
    const _fishingrod = global.db.data.users[m.sender].fishingrod
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
    const fishingrod = (_fishingrod == 0 ? 20000 : '' || _fishingrod == 1 ? 49999 : '' || _fishingrod == 2 ? 99999 : '' || _fishingrod == 3 ? 149999 : '' || _fishingrod == 4 ? 299999 : '')
    const budak = (_budak == 0 ? 50000 : '' || _armor == 1 ? 600000 : '' || _armor == 2 ? 70000 : '' || _armor == 3 ? 800000 : '' || _armor == 4 ? 99999 : '')
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
List Barang:\n\n
🧪Potion:       ${potion}
⏳Limit:.        ${limit}
💎Diamond:     ${Bdiamond}
🪙  Gold :         ${Bgold}
🪨 Batu:           ${Bbatu}
🪵 Kayu:           ${Bkayu}
🕸️ String:         ${Bstring}
⛓️ Iron:             ${Biron}
📦 Common:     ${Bcommon} 
🛍️ Uncommon: ${Buncommon}
🎁 Mythic:          ${Bmythic}
🧰 Legendary:    ${Blegendary}
🗑️Sampah:     ${Bsampah}
👕Armor:       ${armor}
⛏️Pickaxe:          ${pickaxe} +500 durability
🎣Fishingrod:      ${fishingrod} +500 durability
🎟️Tprem: ${Btprem}
🗡️Sword:       ${sword}\
*Barang   | Harga Jual*\n
🧪Potion:       ${Spotion}
⏳Limit:          ${Slimit}
💎Diamond:     ${Sdiamond}
🪙  Gold:          ${Sgold}
🪨 Batu:           ${Sbatu}
🪵 Kayu:           ${Skayu}
🕸️ String:         ${Sstring}
⛓️ Iron:            ${Siron}
📦 Common:     ${Scommon}
🛍️ Uncommon:${Suncommon}
🎁 Mythic:        ${Smythic}
🧰 Legendary:  ${Slegendary}
🐤Budak:        ${budak}
🗑️Sampah:     ${Ssampah}\n\n
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,)
                        break
                    case 'limit':
                             if (global.db.data.users[m.sender].exp >= limit * count) {
                             	global.db.data.users[m.sender].exp -= limit * count
                                 global.db.data.users[m.sender].limit += count * 1
                                 conn.reply(m.chat, `Sukses membeli ${count} limit dengan harga ${limit * count} exp`, m)
                              } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                           break
                           case `gold`:
                            if (global.db.data.users[m.sender].money >= Bgold * count) {
                            global.db.data.users[m.sender].money -= Bgold * count
                            global.db.data.users[m.sender].gold += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold Dengan Harga ${Bgold * count} money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                           case 'tprem':
                            if (global.db.data.users[m.sender].money >= Btprem * count) {
                                global.db.data.users[m.sender].tprem += count * 1
                                global.db.data.users[m.sender].money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                        
                        break
                        case 'batu':
                           if (global.db.data.users[m.sender].money >= Bbatu * count) {
                               global.db.data.users[m.sender].batu += count * 1
                               global.db.data.users[m.sender].money -= Bbatu * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Batu Dengan Harga ${Bbatu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Kayu Dengan Harga ${Bkayu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Sukses Membeli ${count} String Dengan Harga ${Bstring * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                        case 'iron':
                           if (global.db.data.users[m.sender].money >= Biron * count) {
                               global.db.data.users[m.sender].iron += count * 1
                               global.db.data.users[m.sender].money -= Biron * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga ${Biron * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                        
                        break
                    case 'sword':
                            if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > sword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Succes membeli sword seharga ${sword} money` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} money`, m)
                     
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money`, m)
                        
                        break
                        case 'budak':
                            if (global.db.data.users[m.sender].budak == 5) return conn.reply(m.chat, 'Budakmu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > budak) {
                                global.db.data.users[m.sender].budak += 1
                                global.db.data.users[m.sender].money -= budak * 1
                                conn.reply(m.chat, `Succes membeli budak seharga ${budak} money` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli budak seharga ${budak} money`, m)
                        
                        break
                        case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxemu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > pickaxe * 1) {
                            global.db.data.users[m.sender].pickaxe += 1
                            global.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money`, m)
                        break
                        case 'fishingrod':
                    if (global.db.data.users[m.sender].fishingrod == 5) return conn.reply(m.chat, 'Fishingrodmu sudah *Level Max*', m)
                    if (global.db.data.users[m.sender].money > fishingrod * 1) {
                        global.db.data.users[m.sender].fishingrod += 1
                        global.db.data.users[m.sender].fishingroddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                        global.db.data.users[m.sender].money -= fishingrod * 1
                        conn.reply(m.chat, `Succes membeli fishingrod seharga ${fishingrod} money` ,m)
                        
                   } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli fishingrod seharga ${fishingrod} money`, m)
                   break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                   case 'limit':
                       if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].exp += Slimit * count
                            global.db.data.users[m.sender].limit -= count * 1
                            conn.reply(m.chat, `Sukses menjual ${count} limit dengan harga ${Slimit * count} exp`.trim(), m)
                         } else conn.reply(m.chat, `Limit kamu tidak cukup`.trim(), m)
                         break
                         case 'gold':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].money += Sgold * count
                            global.db.data.users[m.sender].gold -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gold Dengan Harga ${Sgold * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                        case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Batu Dengan Harga ${Sbatu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kayu Dengan Harga ${Skayu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} String Dengan Harga ${Sstring * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `String Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].money += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Iron Dengan Harga ${Siron * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Iron Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,m)
                    
                    break
               case 'limit':
                        if (global.db.data.users[m.sender].exp >= limit * count) {
                        	global.db.data.users[m.sender].exp -= limit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         break
                         case `gold`:
                            if (global.db.data.users[m.sender].money >= Bgold * count) {
                            global.db.data.users[m.sender].money -= Bgold * count
                            global.db.data.users[m.sender].gold += count * 1
                            conn.reply(m.chat, `Sukses Membeli ${count} Gold Dengan Harga ${Bgold * count} money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                    case 'batu':
                           if (global.db.data.users[m.sender].money >= Bbatu * count) {
                               global.db.data.users[m.sender].batu += count * 1
                               global.db.data.users[m.sender].money -= Bbatu * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Batu Dengan Harga ${Bbatu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Kayu Dengan Harga ${Bkayu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                    case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Sukses Membeli ${count} String Dengan Harga ${Bstring * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                        case 'iron':
                           if (global.db.data.users[m.sender].money >= Biron * count) {
                               global.db.data.users[m.sender].iron += count * 1
                               global.db.data.users[m.sender].money -= Biron * count
                               conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga ${Biron * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                    
                    break
                case 'sword':
                        if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > sword * 1) {
                            global.db.data.users[m.sender].sword += 1
                            global.db.data.users[m.sender].money -= sword * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${sword} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} money`, m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money`, m)
                    
                    break
                    case 'budak':
                        if (global.db.data.users[m.sender].budak == 5) return conn.reply(m.chat, 'Budakmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > budak * 1) {
                            global.db.data.users[m.sender].budak += 1
                            global.db.data.users[m.sender].money -= budak * 1
                            conn.reply(m.chat, `Succes membeli budak seharga ${budak} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli budak seharga ${budak} money`, m)
                    
                    break
                    case 'tprem':
                            if (global.db.data.users[m.sender].money >= Btprem * count) {
                                global.db.data.users[m.sender].tprem += count * 1
                                global.db.data.users[m.sender].money -= Btprem * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        break
                        case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxemu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > pickaxe * 1) {
                            global.db.data.users[m.sender].pickaxe += 1
                            global.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money`, m)
                        break
                    case 'fishingrod':
                        if (global.db.data.users[m.sender].fishingrod == 5) return conn.reply(m.chat, 'Fishingrodmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > fishingrod * 1) {
                            global.db.data.users[m.sender].fishingrod += 1
                            global.db.data.users[m.sender].fishingroddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= fishingrod * 1
                            conn.reply(m.chat, `Succes membeli fishingrod seharga ${fishingrod} money` ,m)
                            
                       } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli fishingrod seharga ${fishingrod} money`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].limit >= count * 1) {
                        global.db.data.users[m.sender].exp += Slimit * count
                        global.db.data.users[m.sender].limit -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} limit dengan harga ${Slimit * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Limit kamu tidak cukup`.trim(), m)
                    break
                    case 'gold':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].money += Sgold * count
                            global.db.data.users[m.sender].gold -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gold Dengan Harga ${Sgold * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Gold Kamu Tidak Cukup`.trim(), m)
                        break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Batu Dengan Harga ${Sbatu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Batu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kayu Dengan Harga ${Skayu * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Kayu Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} String Dengan Harga ${Sstring * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `String Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'iron':
                            if (global.db.data.users[m.sender].iron >= count * 1) {
                                global.db.data.users[m.sender].money += Siron * count
                                global.db.data.users[m.sender].iron -= count * 1
                                conn.reply(m.chat, `Sukses Menjual ${count} Iron Dengan Harga ${Siron * count} Money`.trim(), m)
                            } else conn.reply(m.chat, `Iron Kamu Tidak Cukup`.trim(), m)
                            break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler