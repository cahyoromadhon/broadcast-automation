# Whatsapp Broadcast Automation Bot
A powerful WhatsApp broadcast automation bot built with Baileys that enables broadcast messaging and panel management capabilities.
## Key Features
- **WhatsApp Bot Integration**
  - Built on whiskeysockets/baileys library
  - Supports multiple message types (text, media, buttons)
  - Automated responses and command handling
- **Broadcast Capabilities** 
  - Push notifications to multiple groups
  - Bulk message sending with delay controls
  - Contact list management and saving
  - Support for text, images and interactive messages
- **Media Features**
  - Sticker Creation
  - YouTube Downloader
  - TikTok Downloader
  - Instagram Downloader
  - Facebook Downloader
  - Pinterest Downloader
  - MediaFire Downloader
- **Additional Features**
  - Media conversion tools
  - File type handling
  - Welcome messages for groups
  - Admin controls and permissions
  - Payment system integration
  - Auto-response system
## Technical Details
- Built with Node.js
- Uses MongoDB/JSON for data storage
- Supports multiple API integrations
- Configurable settings and delays
- Comprehensive error handling
## Usage
The bot can be controlled via WhatsApp commands and provides features for:
- Broadcasting messages to groups
- Managing server panels
- Handling user authentication
- Processing media files
- Managing contacts and groups
Developed by Lexzymarket for WhatsApp automation needs.
## 📋 Requirements
- Node.js v14 or higher
- FFmpeg
- ImageMagick
- MongoDB (optional)
## 🛠️ Installation
1. Clone this repository:
```bash
git clone https://github.com/yourusername/broadcast-automation.git
cd broadcast-automation
```
2. Install dependencies:
```bash
npm install
```
3. Configure settings:
   - Rename `settings.example.js` to `settings.js`
   - Update configuration values in `settings.js`
4. Start the bot:
```bash
npm start
```
## 🔧 Configuration
Edit `settings.js` to configure:
- Bot Name
- Owner Number
- MongoDB URL (optional)
- API Keys
- Panel Settings
- Other Preferences
## 📚 Usage
1. Scan QR code when prompted
2. Bot is ready to use when connected
3. Use `.menu` command to see available features
4. Admin commands start with `.`
### Common Commands
- `.menu` - Show all commands
- `.push` - Send broadcast message
- `.pushkontak` - Send message to saved contacts
- `.savekontak` - Save contacts from group
- `.listpanel` - Show panel list
- `.addpanel` - Add new panel
- `.delpanel` - Delete panel
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## 🙏 Credits
- [Baileys](https://github.com/whiskeysockets/baileys) - WhatsApp Web API
- [Node.js](https://nodejs.org/)
- All contributors and dependencies
## ⚠️ Disclaimer
This project is not affiliated with WhatsApp Inc. Use at your own risk.
