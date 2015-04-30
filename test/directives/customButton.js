describe('directives', function() {

  beforeEach(module('app'));

  var element;
  var outerScope;
  var innerScope;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<super-button label="myLabel" on-click="customCallback()"></super-button>');

    outerScope = $rootScope;
    $compile(element)(outerScope);

    innerScope = element.isolateScope();

    outerScope.$digest();
  }));

  describe('label', function() {
    beforeEach(function() {
      outerScope.$apply(function() {
        outerScope.myLabel = 'Hello world.';
      });
    });

    it('should be rendered', function() {
      expect(element[0].children[0].innerHTML).to.equal('Hello world.');
    });

    describe('click callback', function() {
      var spy;

      beforeEach(function() {
        spy = sinon.spy();
        outerScope.$apply(function() {
          outerScope.customCallback = spy;
        });
      });

      describe('when the directive is clicked', function() {
        beforeEach(function() {
          var ev = document.createEvent('MouseEvent');
          ev.initMouseEvent('click', true, true);
          element[0].children[1].dispatchEvent(ev);
        });

        it('should be called', function() {
          expect(spy.callCount).to.equal(1);
        });
      });

    });
  });

});
