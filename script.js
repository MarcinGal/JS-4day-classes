 function ToDo() {
    this.tasks = [];
 }

ToDo.prototype.addTask = function (text) {
    new Task(text)
}

function Task(text) {
    this.text = text;
}

