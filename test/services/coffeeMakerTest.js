describe('coffee maker provider', function() {
  var coffeeProvider = undefined;

  beforeEach(function() {
    angular.module('dummyModule', function() {})
      .config(['coffeeMakerProvider', function(coffeeMakerProvider) {
        coffeeProvider = coffeeMakerProvider;
      }]);

    module('app', 'dummyModule');

    inject(function() {});
  });

  describe('with french press', function() {
    beforeEach(function() {
      coffeeProvider.useFrenchPress(true);
    });

    it('should remember the value', function() {
      expect(coffeeProvider.useFrenchPress()).to.equal(true);
    });

    it('should make some coffee', inject(function(coffeeMaker) {
      expect(coffeeMaker.brew()).to.equal('Le café.');
    }));
  });

  describe('without french press', function() {
    beforeEach(function() {
      coffeeProvider.useFrenchPress(false);
    });

    it('should remember the value', function() {
      expect(coffeeProvider.useFrenchPress()).to.equal(false);
    });

    it('should make some coffee', inject(function(coffeeMaker) {
      expect(coffeeMaker.brew()).to.equal('A coffee.');
    }));
  });

});
