import { StringCalculator } from "./string-calculator";

describe('string-calculator', ()=>{
    describe('add', ()=>{
        test('given empty string should return 0', ()=>{
            //Arrange
            const input = "";
            const expected = 0;
            const sut = createSut();
            //Act
            const actual = sut.add(input);
            //Assert
            expect(actual).toBe(expected);
        })
    })
    
    function createSut() {
    return new StringCalculator();
}
})


