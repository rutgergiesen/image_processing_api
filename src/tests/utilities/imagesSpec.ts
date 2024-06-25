import images from "../../utilities/images";

// Image transform function should resolve or reject
describe('Test for image utilities', () => {
    // it('can\'t find the file fjor.jpg', async () =>{
    //     const result = await images.resizeImage("fjor.jpg", 800, 600);
    //     expect(result).toBe(-1); 
    // })
    it('gets file format for fjord.jpg', async () => {
        const result = await images.getFormat('fjord.jpg');
        expect(result).toBe('jpeg')
    //     expect(result).toBe(-1); 
        
    });

    it('image fjord.jpg succesfuly resized', async () =>{
        const result = await images.resizeImage("fjord.jpg", 800, 600);
        expect(result).toBe('fjord_800x600.jpg'); 
    })
    //test target resize larger than source
})
