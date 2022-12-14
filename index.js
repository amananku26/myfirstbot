require("dotenv").config()
const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const express = require('express');
const app = express();

// replace the value below with the Telegram token you receive from @BotFather
console.log(process.env.TELEGRAM_TOKEN_FATHERBOT)
const token = "5353833113:AAEh96SoHz5D04wYbchzZolkLH2B36PJ2tA----";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  console.log(msg,match)
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  console.log(msg)
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  if(msg.text === '/hello'){
    bot.sendMessage(chatId, 'This Bot is made by Aman Anku');
    const url = 'https://telegram.org/img/t_logo.png';
    bot.sendPhoto(chatId, url);
  } else {
    bot.sendMessage(chatId, 'You can Send /hello \nCurrently the BOT has limited Functionallity');
  }
 
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server is running at port ${PORT}`);
});
