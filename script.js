class ToDo {
    constructor() {
        this.tasks = []
        this.render()
    }

    addTask(text) {
        this.tasks.push(new Task(text))

        this.render()
    }
    render() {
        document.body.innerHTML = ''

        this.makeUI();

        const ul = document.createElement('ul')
        document.body.appendChild(ul);

        this.tasks.forEach(task => {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerText = task.text

        })
    }

    makeUI() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = 'Kliknij mnie'

        button.addEventListener(
            'click',
            () => this.addTask(input.value)
        )

        document.body.appendChild(input)
        document.body.appendChild(button)
    }
}

class Task {
    constructor(text) {
        this.text = text
    }
}

const toDo1 = new ToDo()

toDo1.addTask('Wynieś śmieci!')
console.log(toDo1)



