"use strict";
//import sharp from "sharp";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {promises as fs} from fs;
const sharp = require("sharp");
const path = require('path');
const sourceDir = '/Users/rutger/Projects/Image Processing API/image_processing_api/build/images/full/';
const targetDir = '/Users/rutger/Projects/Image Processing API/image_processing_api/build/images/thumbs/';
function getFormat(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //const dir = __dirname;
            const metadata = yield sharp(`${sourceDir}${filename}`).metadata();
            return metadata.format;
            console.log(metadata);
        }
        catch (error) {
            console.log(`An error occurred during processing: ${error}, Current dir: ${__dirname}`);
        }
    });
}
// check if file exists, is JPG file and return basefilename
function getBaseFilename(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let baseFilename = "";
            // check if filename exists
            if ((yield getFormat(filename)) == 'jpeg') {
                baseFilename = path.parse(filename).name;
            }
            else {
                throw ('file not a jpg');
            }
            return baseFilename;
        }
        catch (error) {
            return `${error}`;
        }
    });
}
// get image, resize and save to targetfolder
function resizeImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetFilename = "";
        try {
            targetFilename = (yield getBaseFilename(filename)).concat(`_${width}x${height}.jpg`);
            console.log(`targetFilename: ${targetFilename}`);
            //const targetFilename = `filename`
            yield sharp(`${sourceDir}${filename}`)
                .resize({
                width: (width),
                height: (height)
            })
                .toFile(`${targetDir}${targetFilename}`);
            console.log(`resizeImage completed. New file: ${targetFilename}`);
        }
        catch (error) {
            //console.log(`resizeImage error: ${error}`)
            return `${error}`;
        }
        return targetFilename;
    });
}
exports.default = {
    //getMetadata,
    getFormat,
    getBaseFilename,
    resizeImage
};
// create new file
// write new file
