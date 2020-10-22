exports.run = (client, message, args) => {    
/*    if (message.author.id !== '390716808505851904')return;
*/
         message.channel.send("Pinging...").then(m =>{
        const ping = m.createdTimestamp - message.createdTimestamp;
        const clientPing = Math.round(client.pi);

        m.edit(`:ping_pong: Pong! Your Ping Is: **${ping}ms**`);
    });
  }