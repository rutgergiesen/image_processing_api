"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./utilities/images"));
const app = (0, express_1.default)();
const port = 3000;
const filename = "";
app.get("/api/images", (req, res) => {
    //let width: Number = 0;
    //let height: Number = 0;
    //retrieve params
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    console.log(`Filename = ${filename}`);
    console.log(`Width = ${width}`);
    console.log(`Height = ${height}`);
    res.send(`<img src=""`);
    // resize image
    if (filename !== undefined) {
        console.log(`Filename: ${filename}`);
        images_1.default.resizeImage(filename.toString(), width, height);
    }
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
//images.getMetadata();
// retrieve params
//http://localhost:3000/api/images/?file=fjord.jpg
// show image in browser, src of image is url including params
