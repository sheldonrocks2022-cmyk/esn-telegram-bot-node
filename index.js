// ESN Telegram bot starter (Node.js, Telegraf). MIT License. https://esnoffical.com
require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');

const { TELEGRAM_BOT_TOKEN } = process.env;
if (!TELEGRAM_BOT_TOKEN) {
  console.error('Set TELEGRAM_BOT_TOKEN in .env first.');
  process.exit(1);
}

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

const HELP_TEXT = [
  '<b>Commands</b>',
  '/start - say hi and show the menu',
  '/help - this message',
  '/menu - inline keyboard example',
  '',
  "Send me any text and I'll echo it back.",
].join('\n');

const menuKeyboard = () => Markup.inlineKeyboard([
  [Markup.button.callback('👋 Say hi', 'hi'), Markup.button.callback('🎲 Roll a dice', 'dice')],
  [Markup.button.callback('ℹ️ About', 'about')],
  [Markup.button.url('🌐 ESN Hosting', 'https://esnoffical.com')],
]);

bot.start((ctx) => ctx.reply(`Hey ${ctx.from?.first_name || 'there'}! 👋 I'm your new bot. Pick something:`, menuKeyboard()));
bot.help((ctx) => ctx.replyWithHTML(HELP_TEXT));
bot.command('menu', (ctx) => ctx.reply("Here's the menu:", menuKeyboard()));

bot.action('hi', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText(`Hi ${ctx.from.first_name}! 😄`, menuKeyboard());
});
bot.action('dice', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.replyWithDice();
});
bot.action('about', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.editMessageText('Built with Telegraf. Edit index.js to add your own commands.', menuKeyboard());
});

// Echo any text that isn't a command
bot.on(message('text'), (ctx) => {
  if (ctx.message.text.startsWith('/')) return;
  return ctx.reply(ctx.message.text);
});

bot.catch((err, ctx) => console.error(`Error handling update ${ctx.updateType}:`, err.message));

bot.launch(() => console.log('Bot is running (long polling). Press Ctrl+C to stop.'))
  .catch((err) => {
    console.error('Could not start the bot:', err.description || err.message);
    process.exit(1);
  });

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
