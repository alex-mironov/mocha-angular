describe('waiter', function() {
  beforeEach(module('app'));

  var waiter;
  var $timeout;

  beforeEach(inject(function(_waiter_, _$timeout_) {
    waiter = _waiter_;
    $timeout = _$timeout_;
  }));

  describe('brieflySetSomething to true method', function() {
    var anyObject;

    beforeEach(function() {
      anyObject = {foo: 42};
      waiter.brieflySetSomething(anyObject, 'foo');
    });

    it('should briefly set something to true', function() {
      expect(anyObject.foo).to.equal(true);
      $timeout.flush();
      expect(anyObject.foo).to.equal(42);
    });
  });
});
