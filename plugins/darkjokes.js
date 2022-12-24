let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lol', '/api/meme/darkjoke', {}, 'apikey'), 'Dark Jokes', wm, 'Next!', '.darkjokes', m, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: linkgc,
    mediaType: 2,
    description: deslink , 
    title: titlink,
    body: wm, 
    thumbnail: bg,
    sourceUrl: 'https://github.com/Kangsad01'
     }}
  })
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler