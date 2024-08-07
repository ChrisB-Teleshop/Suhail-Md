const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348138948744";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_41_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrQjlwRTU3ZjU2QVR2MS9kOVp4YXgvaTlHdEpIU2phYXRtS3Q3N25BUnRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzg5NDg3NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2MEVDMThGMTkzNUE5OEJBOTk3REZGNjcyNkUwRDdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzAxMjg5MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5Z0R1RGE5RlFYNnpCUG5pMEZucnN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyNTVhMTdmLTQ4ZGMtNGFkNy05Y2NhLTU3OTczYzY4ZjcyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDE3MyxcbiAgICAgIDIxLFxuICAgICAgMTI2LFxuICAgICAgMTExLFxuICAgICAgMjEyLFxuICAgICAgMTg2LFxuICAgICAgNzUsXG4gICAgICAxNzYsXG4gICAgICA5NyxcbiAgICAgIDEyNCxcbiAgICAgIDE2MCxcbiAgICAgIDI3LFxuICAgICAgODcsXG4gICAgICAyMjQsXG4gICAgICA5NCxcbiAgICAgIDI1MSxcbiAgICAgIDExNixcbiAgICAgIDQ5LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDc4LFxuICAgICAgMjUxLFxuICAgICAgMTA2LFxuICAgICAgMjMyLFxuICAgICAgNDQsXG4gICAgICAxMTIsXG4gICAgICAyMjcsXG4gICAgICAxMDAsXG4gICAgICA2NyxcbiAgICAgIDEzOCxcbiAgICAgIDI5LFxuICAgICAgMjM4LFxuICAgICAgMzgsXG4gICAgICAzMyxcbiAgICAgIDIyMCxcbiAgICAgIDE0NSxcbiAgICAgIDExOSxcbiAgICAgIDE1MSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhQRUYzUkxYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM4OTQ4NzQ0OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MTg2MzEzMDEyMDI4NjozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRGRuWEVRa2E3TXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFhWXZoaTMxVDhWYWxRcTJnYk5VZHJEelZNeFpOSlJBNk1jV2s4VG5ZMmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGluM1BvQks3ZnV2NEpTNWtDc1djR0tIRTVwWW1pRjVFbUMyRll6VndyK0lpdko3YUhGYlVpbnZ5VVI2cU9qaGxCa0Z4NXYvdlQ4QitGbktuM2ZkRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1pJODlhZjNKdHBka2hSOXJzSHF0R1VrZUtQQmpKcFhha3FML1FwWDFObFkwRi9ubVlGeXN6MmQ5OGJ0b0gva0NCN00vVjYyWER0ZmVFbWdZcWVIQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzODk0ODc0NDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAxMjg4NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
