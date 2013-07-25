function LearningRepository(initialRepo) {

    var nextId = 1;
    var learnings = [];

    for(var i = 0; i < initialRepo.length; i++) {
        assignNextId(initialRepo[i]);
        learnings.push(initialRepo[i]);
    }

    this.getAll = function() {
        return learnings;
    }

    this.add = function(learning) {
        assignNextId(learning);
        learnings.push(learning);
    }

    function assignNextId(learning) {
        learning.id = nextId;
        nextId++;
    }
}
