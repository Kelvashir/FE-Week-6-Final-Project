const expect = chai.expect;
const assert = chai.assert;

describe("Week 6 Final Project Test:", () => {
  describe(`Drawing a card`, () => {
    it("#Should remove the first element in the array and return it", () => {
      // Copy & paste your debugged code from week6Lab.js
      let testArray = [5, 4, 3, 2, 1];
      const drawCard = (deckOfCards) => {
        return deckOfCards.shift();
      };

      expect(drawCard(testArray)).to.equal(5);
    });
  });

  describe(`Example Failed Test: Drawing a card`, () => {
    it("#Should fail", () => {
      let testArray = [5, 4, 3, 2, 1];
      const drawCard = (deckOfCards) => {
        return deckOfCards.splice(0, 1);
      };

      expect(drawCard(testArray)).to.equal(5);
    });
  });
});
