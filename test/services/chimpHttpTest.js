describe('chimp http', function() {
  beforeEach(module('app'));

  var chimpHttp;
  var $httpBackend;

  beforeEach(inject(function(_chimpHttp_, _$httpBackend_) {
    chimpHttp = _chimpHttp_;
    $httpBackend = _$httpBackend_;
  }));

  describe('when sending a message', function() {
    beforeEach(function() {
      $httpBackend.expectPOST('http://chimps.org/messages', {message: 'Ook.'})
        .respond(200, {message: 'Ook.', id: 0});

      chimpHttp.sendMessage();
      $httpBackend.flush();
    });

    it('shoud send an HTTP POST request', function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
