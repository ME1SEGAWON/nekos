let toM = a => '@' + a.split('@')[0]
function handler(m, { conn, groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b 
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    conn.sendButton(m.chat, `@${m.sender.split("@")[0]} ❤️ ${toM(b)}`, wm, 'Jodohku', '.jodohku', m, {
        mentions: [m.sender, b], contextInfo: { externalAdReply :{
        showAdAttribution: true,
        mediaUrl: 'https://github.com/Kangsad01',
        mediaType: 2,
        description: deslink, 
        title: run,
        body: wm,
        thumbnail: bg,
        sourceUrl: 'https://github.com/Kangsad01'
        }}
    })
}
handler.help = ['jodohku']
handler.tags = ['fun']
handler.command = ['jodohku']
handler.group = true

module.exports = handler