const express = require('express');
const multer = require('multer');

const musicController = require("../controller/music.controller")

const router = express.Router();

// store in memory so music.controller can use file.buffer
const upload = multer({ storage: multer.memoryStorage() });

// field name must be `file` in the multipart form
router.post("/upload", upload.single('file'), musicController.createMusic);

module.exports = router;

