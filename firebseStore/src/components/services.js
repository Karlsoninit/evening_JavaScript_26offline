import axios from "axios";
class Todo {
  constructor() {
    this.refs = {
      form: document.querySelector(".form"),
      wishesCloud: document.querySelector(".wishesCloud")
    };
  }

  async putTodo(task) {
    try {
      await axios.post("https://rn-todo-48cbb.firebaseio.com/tasks.json", task);
    } catch (error) {
      console.log(error);
    }
  }

  async getTodo() {
    try {
      const data = await axios.get(
        "https://rn-todo-48cbb.firebaseio.com/tasks.json"
      );
      return data.data ? data : [];
    } catch (error) {
      console.log(error);
    }
  }

  async delTodo(id) {
    try {
      await axios.delete(
        `https://rn-todo-48cbb.firebaseio.com/tasks/${id}.json`
      );
    } catch (error) {
      console.log(error);
    }
  }

  drawToHTML(data) {
    this.refs.wishesCloud.innerHTML = "";
    const draw = data.map(
      task => `<li id='${task.id}'>
      <h2>${task.todo}</h2>
      <button>delete</button>
    </li>`
    );
    this.refs.wishesCloud.insertAdjacentHTML("beforeend", draw);
  }

  transformResponseFB(data) {
    return Object.keys(data).map(key => ({
      ...data[key],
      id: key
    }));
  }
}

const todo = new Todo();

export default todo;
