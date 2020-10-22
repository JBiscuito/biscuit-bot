exports.run = (client, message, args) => {

if (message.channel.type === 'dm') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel to use this command!');
		}

		voiceChannel.leave()
};