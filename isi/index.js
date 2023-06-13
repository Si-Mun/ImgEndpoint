const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

//Storage di Firebase
const storage = new Storage({
  projectId: 'project-capstone-c23-pr519',
  keyFilename: 'isi/key.json', 
});
const bucketName = 'gs://project-capstone-c23-pr519.appspot.com'; 

//Post untuk mengirim gambar
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    const file = req.file;
    const fileName = file.originalname;

    
    const bucket = storage.bucket(bucketName);
    const blob = bucket.file(fileName);

    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on('finish', () => {
      res.status(200).send('Upload Gambar Berhasil');
    });

    blobStream.end(file.buffer);
  } catch (error) { //jika error
    console.error('Error', error);
    res.status(500).send('Error');
  }
});

//Server berjalan di port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});