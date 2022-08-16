$.get('http://localhost:3000/todos').then(data => {
    console.log('todos', data)
    let todos = data.todos
    todos.forEach(todo => {
        let time = ''
        if (todo.time) {
          time = `${todo.time.getFullYear()}/${todo.time.getMonth() + 1}/${todo.time.getDate()}`
        }
        $('ul').append(`
        <li>
          <input type="checkbox" ${todo.complete ? 'checked' : ''}/>
          <span>${todo.title}</span>
          <span>${time}</span>
        </li>
        `)
      })
})
