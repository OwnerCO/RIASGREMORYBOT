//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "51978194933";
global.sudo = process.env.SUDO || "51978194933";
global.owner = process.env.OWNER_NUMBER || "51978194933";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1B5OXZucEtTN1plTUlsY09LUUZLR3Nrejh3a3MxSjZMTzUrWGdvRUFYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFNWRWFIYTRsWGRXZmUrSjBYbnlOcUlPYTZHY1YzWVpjSm1TV0dxenBVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRmJJUFFlT1VEQXA1bHRPRmQ5bDZLczV4TUtVcks2NXFoTW1KTlEwZWxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGN3VKZDNYd0VOMDRtcnRCODVmeEhKZlo4ZDIxZHIrekFMQk4vdVg5SXljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPamtYZHorYitrZ015alhMcUh2M2U2MEJsZVRYRmlOMGJsRENJckpYVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllrekxoTExTU2NMYnVsb0tJeCtsMWNldFN2VFBKend5WHIxM3czS0ZnaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BwcVQyWC84Q2VRUFNoUnEydVZwWGRzc0dnUmxkTVlqVTgzQ3JVU21Xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNStXYkhtTUJkTzk2anBGNlo0TjN3Ukc3cFlzWHdHN2xkWDZEeGRRbUdUdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5zSXlKQTBVdFM0cUxoeGdtSDdhWGhMcUZ5aUFsTGIxRGVaR1VzanVDQ0F5djJtcWVHd2pBd2NTS0NmaWE4RjhHS09LMWtBb0VIUklsVVZnaVZRdUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJ4S29VaDBEUUwxRFlsdjEzSTFBZUZ3ZUNEUFdLdUpVSnd2M2N0S1hlQjlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1M0I3RUM5M0ZGREI3ODNCODA4Rjc5NDZEODVGRkYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU4MjU4NzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUxOTc4MTk0OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGNTc1MjQ2NjFCQTlCM0UyQzhERkNEMjRBN0QxOUYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU4MjU4NzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InlCVl9NbGNGUzBpX1N2eU1pSUQzdGciLCJwaG9uZUlkIjoiMmJhNTg3MmEtYzNiZS00ZTI5LTkzNzEtMjQ1NWU3YWJiMmM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks4N0F2TzB3TDcvdFZDRHhRdEZOUU5NQzhMRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJET01rS3VSREJkN0gyaDJNZ3djL0loRDlvWm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEE5QkozWk0iLCJtZSI6eyJpZCI6IjUxOTc4MTk0OTMzOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QkvCdkJjwnZCS8J2VivCdlaDwnZWd8J2VpvCdlaXwnZWa8J2VoPCdlZ/wnZWkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOQ1FsdlVHRU1LRytMWUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6NG5RUmZMRmJIWlFqc1ZTQWFUbkV6MnpEMW5aKzg5K0Rjd09PNXBPNVJnPSIsImFjY291bnRTaWduYXR1cmUiOiJGRDVpSVV3d0NZZEZxUFBKTGFJa1JVMGM2V0k2NVZyUlp6Y2ZhdzhmWXJPelhXcTdlNktoZGtqWURqWnpPbXlwMmFjcWlHUk5TVzRGUThaZGJMQlNEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY1lJN2E5VVRKeERHZU8yL2RFM3ZEaDZZMmpSak9sUmNQN3ZtbFFWczNtOU9EK2tTbzRVRmxQalJFSUV2U1A4Wks1R3pOdlZqS2ZvcUpVTzUrWjA5QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MTk3ODE5NDkzMzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMrSjBFWHl4V3gyVUk3RlVnR2s1eE05c3c5WjJmdlBmZzNNRGp1YVR1VVkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU4MjU4NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVFlIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
