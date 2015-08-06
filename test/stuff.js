var expect    = require('chai').expect;
var stuff = require('../app/stuff');

describe('stuff module', function() {
  it( 'says hello', function() {
    var output = stuff.sayHello();
    expect( output ).to.equal( 'hello' );
  });

  it( 'says goodbye', function() {
    var output = stuff.sayGoodbye();
    expect( output ).to.equal( 'goodbye' );
  });

  it( 'speaks french', function() {
    var output = stuff.speakFrench();
    expect( output ).to.equal( 'bonjour' );
  });

});
