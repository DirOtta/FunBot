const { runInContext } = require("lodash");

const Command = required(`../Structures/Command`);

module.exports = new Command({
    name: "clear",
    description: "Clear an amount of messages",
    Permissions: "MANAGES_MESSAGES",
    async runInContext(message, args, client) {


        const amount = args[1];

        if(!amount || isNaN(amount)) 
            return message.reply(
                `${
                    amount == undefined ? "Nothing" : amount 
                 } is not a valide number !`
            
            );
        
        const amountParsed = parseInt(amount);

        if (amountParsed > 100) 
            return message.reply("You cant clear more than 100 messages !");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(
            `You Cleared ${amountParsed} messages !`
        );

        setTimeout(() => msg.delete(), 5000);
    }
});