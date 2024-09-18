//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2347014703063";
global.sudo = process.env.SUDO || "2347014703063";
global.owner = process.env.OWNER_NUMBER || "2347014703063";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5XU1NQdmgzZXhwakRZUk1DODN1MTZ3aXVGQmd2bGd4V28yZVVCemIyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGJxMXF5ekUwZzZpMS8wemh5Rk9uL0dnQVZjeCtuRkpIZ1lSaHQ0WjhSbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQlZLMFBDQzJHNUlUWmJZRjc4MWpxd3lobFRXUmlCZ3FHZktIRUczOTFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0hORjAvT21ZNU1FV09td3FqaEJmczlNYm43eWowY2tiZGd4b0FKNHhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCdGdJZW40OTJKMXlBWVFEVkVCK2RJc0lhTTZSWGpEbE9WL3BnblRvSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTc2txVVBtZmtONWk0bENEamNHV1FiL3B6bXpYeFAxdUNCTUdHYXh4bkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9aaG5HbGtwZVBXcXJ6cGRxQ3FJTE9kNzZKaXRhcFFncHU3L1lHV1ltTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlhMNXN0cUpjWTFZa0dhL0E2NXBTc2NaOFdYRTZlUHhUT21ldDBPcmJFTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1SNnRkRTR4Sm54Uk84aGthZVZ4emFIS0FxUklsTFFYTktVTHlwckQ0MkgzQyt4eUZmR04ycTFoYmhSdDVkQTVYZXZrWXdUZnNMdGtOSVg3NnJ6ampnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiJxbzh0SUdodTJ3OEVHdm5nWnMwM3EwaFh1bFE2MFV0UUNTelRBNUFSN2ZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJET0FVQ2lfelNvZWdnbi01ckNSWVRRIiwicGhvbmVJZCI6IjQyMzczMGU4LTQxYTQtNGE0Yy1iOTIxLTAzNmNiOTY2MjkzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkREViVjM3am0xbWZGYkZ5YlQ3elQ3T1hSeHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnhqM3d0Tkh5dkZCclZsYVRXNkdwaEVNVkFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJWQzZTWkVIIiwibWUiOnsiaWQiOiIyMzQ3MDE0NzAzMDYzOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkajwnZGs8J2Ru/Cdka/wnZGs8J2RuSDwnZGw8J2RsCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmZJcXRVQkVLcW1xcmNHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieGgvcnFCYkpqRmNDOU1FaWczT3JzR2Q3M2dtQnIrOEo1SGZFYzNkdTZuWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2psUGh3T1AzNWxtcWdoaUZLZVQxaGVoOXdsSE4yN2tWKzNOZDdnem1tclBtZmJaL0pwcE12eENNaHkrL3VhcjJ1dU84alcvd1NIS0hTZno5bENjQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Imp6WW0xWHdWdkdDc25VWVdhM2pId280MmVLSHNnaTBZT0NJNjBicnVBNXZIenp1aXFWcmtPb29weDlhQUE0bDlhemFlS1BzaDZhT3BaV25tbVo0QmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAxNDcwMzA2MzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjWWY2NmdXeVl4WEF2VEJJb056cTdCbmU5NEpnYS92Q2VSM3hITjNidXAyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjQ5MTQ0fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
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
