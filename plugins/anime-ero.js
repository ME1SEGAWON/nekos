let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.send3TemplateButtonImg(m.chat, global.API('xteam', '/randomimage/ero', {}, 'apikey'), 'wangy wangy', wm, 'Again', `${usedPrefix + command}`, 'Menu', `${usedPrefix}menu`, 'Owner', `${usedPrefix}owner`, m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: 'https://github.com/Kangsad01',
    mediaType: 2,
    description: deslink, 
    title: titlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: 'https://github.com/Kangsad01'
     }}
  })
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler