const express = require('express');
const path = require('path');
const app = express();

// 設定靜態文件夾
app.use(express.static(path.join(__dirname, 'public')));

// 啟動伺服器
app.listen(3000, () => {
  console.log('伺服器運行在 http://localhost:3000');
});
