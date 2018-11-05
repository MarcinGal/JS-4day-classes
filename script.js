function ToDo() {
    this.tasks = []

    this.render()
}

ToDo.prototype.addTask = function (text) {
    this.tasks.push(new Task(text))

    this.render()
}

ToDo.prototype.render = function () {
    document.body.innerHTML = ''

    const ul = document.createElement('ul')

    this.tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task.text
        document.body.appendChild(ul);
        ul.appendChild(li);
    })
}

function Task(text) {
    this.text = text
}

const toDo1 = new ToDo()

toDo1.addTask('Wynieś śmieci!')
console.log(toDo1)



