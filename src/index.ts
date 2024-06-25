import express from "express";
import images from "./utilities/images";
import resizeImage from "./utilities/images";
import path from "path";
import { log } from "console";
//var path = require('path');

const app = express();
const port = 3000;

const filename: string = "";

//app.use(express.static('images'));
// console.log(__dirname);
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get("", (req, res) => {
    res.send(`<img src="${req.query.filename}">`)
});

app.get("/api/images", async (req, res) => {

  let filename : String = "";
  if (req.query.filename !== undefined)
    filename = req.query.filename.toString();

  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  let targetFilename : String = "";//images.getTargetFilename(filename, width, height);

//   console.log(`Filename = ${filename}`);
//   console.log(`Width = ${width}`);
//   console.log(`Height = ${height}`);

  // resize image
  if (filename !== undefined) {
    console.log(`Filename: ${filename}`);
    targetFilename = await images.resizeImage(filename, width, height);
  }

  res.send(`<img src="/images/thumbs/${targetFilename}">`);

  //res.send(`Hi <img src="/images/thumbs/encenadaport.jpg">`);
  //http://localhost:3000/images/full/fjord.jpg
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});



export default app;

//images.getMetadata();

// retrieve params

//http://localhost:3000/api/images/?file=fjord.jpg

// show image in browser, src of image is url including params
