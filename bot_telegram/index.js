import dotenv from 'dotenv-safe'
import { Telegraf } from 'telegraf'

dotenv.config()
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('hi', (ctx) => ctx.reply(`Hello Padawan`));

bot.launch();