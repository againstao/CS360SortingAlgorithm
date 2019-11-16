export { StateQueue };

// >> State will be saved in json objects.
//  This will allow versatility of what "state" actually means to each sort.

function StateQueue() {
    this.list = [];
}
StateQueue.prototype.queue = function(jsonObject) {
    this.list.push(jsonObject); // TODO: TEST THIS to ensure it adds to END
}
StateQueue.prototype.dequeue = function() {
    return this.list.pop(); // TODO: TEST THIS to ensure it removes from END
}