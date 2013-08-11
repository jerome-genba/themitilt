'use strict';

describe('Domain: LearningRepository', function () {

    var learningRepository;

    beforeEach(function () {
        learningRepository = new LearningRepository([
            new Learning('Learning 1', 'Victor Hugo', new Date(2013, 6, 28, 13, 7, 43)),
            new Learning('Learning 2', 'Gandhi', new Date(2013, 6, 27, 9, 32, 14))
        ]);
    });

    it('should instantiate repository correctly when no initial learnings', function() {
        learningRepository = new LearningRepository();
        learningRepository.should.not.be.an('undefined');
    });

    it('should get all Learnings from repository', function () {
        learningRepository.getAll().length.should.be.equal(2);
    });

    it ('should add a Learning to repository', function() {
        learningRepository.add(new Learning('message', 'author', new Date()));

        learningRepository.getAll().length.should.be.equal(3);
        learningRepository.getAll()[2].message.should.be.equal('message');
        learningRepository.getAll()[2].id.should.be.equal(3);
    });

});