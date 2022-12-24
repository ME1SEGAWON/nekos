let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elf', {}, 'apikey'), 'Nih', wm, 'NEXT', '.elf', m, {
        contextInfo: { externalAdReply :{
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
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

module.exports = handler