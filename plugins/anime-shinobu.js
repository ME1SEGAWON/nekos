let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/shinobu')
  let json = await res.json()
  conn.sendButtonImg(m.chat, json.url, 'Nihh shinobunya', wm, `Next`, `${usedPrefix}${command}` , m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: 'https://github.com/Kangsad01',
    mediaType: 2,
    description: deslink, 
    title: run,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: 'https://github.com/Kangsad01'
     }}
  })
  } catch {
    throw eror 
  }
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

handler.limit = true

module.exports = handler