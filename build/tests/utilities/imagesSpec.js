"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const images_1 = __importDefault(require("../../utilities/images"));
// Image transform function should resolve or reject
describe('Test for image utilities', () => {
    // it('can\'t find the file fjor.jpg', async () =>{
    //     const result = await images.resizeImage("fjor.jpg", 800, 600);
    //     expect(result).toBe(-1); 
    // })
    it('gets file format for fjord.jpg', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield images_1.default.getFormat('fjord.jpg');
        expect(result).toBe('jpeg');
        //     expect(result).toBe(-1); 
    }));
    it('image fjord.jpg succesfuly resized', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield images_1.default.resizeImage("fjord.jpg", 800, 600);
        expect(result).toBe('fjord_800x600.jpg');
    }));
    //test target resize larger than source
});
