module.exports.run = function (args, e, manager) {
    const member = e.message.author;
    const channel = e.message.channel;
    const name = args[0];
    var bis = Math.floor((Math.random() * 10) + 1)
    if (bis <= 3) {
        channel.sendMessage(name + ", " + member.mention + " dividiu um biscoito de chocolate com você");
    }
    if (bis >= 4 && bis <= 6) {
        channel.sendMessage(name + ", " + member.mention + " comeu o biscoito sozinho e não te deu nada");
    }
    if (bis > 6) {
        channel.sendMessage(name + ", " + member.mention + " te deu um biscoito caseiro de aveia");
    }
}

module.exports.usage = function(e, manager) {
    e.message.channel.sendMessage(["Compartilhe um biscoito com alguém", "Uso: !cookie <nome>"]);
}
