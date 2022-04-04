const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/info.html'));
});

const PORT = process.env.PORT || 9090;
app.use('/',router);
app.listen(PORT, () => {
  console.log(`Server is up and listening at port: ${PORT}`);
});