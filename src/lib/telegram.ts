import TelegramBot from 'node-telegram-bot-api';
const token = process.env.TELEGRAM_TOKEN_BOT 

const bot = new TelegramBot(token, {polling: true});
export const telegram = () => {
    bot.sendMessage('1911017660', `I'm online and ready for my service!✔️`);
}
export default bot;

