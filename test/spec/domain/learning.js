'use strict';

describe('Domain: Learning', function() {

    var learning;
    var dummyMessage = "The #MITILT is ...";
    var dummyAuthor = "Marius";
    var dummyDate = new Date(1365359327150);

    beforeEach(function() {
        learning = new Learning(dummyMessage, dummyAuthor, dummyDate);
    });

    it('should be created', function() {
        learning.should.be.an.instanceof(Learning);
        learning.message.should.be.equal(dummyMessage);
        learning.author.should.be.equal(dummyAuthor);
        learning.date.should.be.equal(dummyDate);
    });


});
