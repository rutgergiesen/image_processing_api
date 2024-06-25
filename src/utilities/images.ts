//import sharp from "sharp";

import { error, log } from "console";

//import {promises as fs} from fs;
const sharp = require("sharp");
const path = require('path');
const sourceDir = '/Users/rutger/Projects/Image Processing API/image_processing_api/src/images/full/';
const targetDir = '/Users/rutger/Projects/Image Processing API/image_processing_api/src/images/thumbs/';


async function getFormat(filename: String) {
    try {
      //const dir = __dirname;
      const metadata = await sharp(`${sourceDir}${filename}`).metadata();
      return metadata.format;
      console.log(metadata);
    } catch (error) {
      console.log(`An error occurred during processing: ${error}, Current dir: ${__dirname}`);
    }
}

// check if file exists, is JPG file and return basefilename
function getBaseFilename (filename: String) : String {
    try{
       let baseFilename = "";
       // check if filename exists
         baseFilename = path.parse(filename).name
        return baseFilename;
    }
    catch(error){
        return `${error}`;
    }
}

function getTargetFilename (filename: String, width: Number, height: Number) : String{
    return getBaseFilename(filename).concat(`${width}x${height}.jpg`);
}
  
// get image, resize and save to targetfolder
async function resizeImage(filename: String, width: Number, height: Number) : Promise<String>{
    let targetFilename : String = "";
    try{
        if(await getFormat(filename) == 'jpeg')
            getBaseFilename(filename)
        else 
            throw('file not a jpg');

        targetFilename = getTargetFilename(filename, width, height);
        console.log(`targetFilename: ${targetFilename}`);
        //const targetFilename = `filename`
        await sharp(`${sourceDir}${filename}`)
        .resize({
            width: (width),
            height: (height)
        })
        .toFile(
            `${targetDir}${targetFilename}`
        )
        console.log(`resizeImage completed. New file: ${targetFilename}`)
    } catch (error){
        //console.log(`resizeImage error: ${error}`)
        return `${error}`;
    }
    return targetFilename
}

export default {
    getTargetFilename,
    getFormat,
    getBaseFilename,
    resizeImage
}

// create new file


// write new file