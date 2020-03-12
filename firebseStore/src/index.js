import services from "./components/services";

console.log(services);

(async () => {
  const data = await services.getTodo();
  console.log(data);

  if (!data.data) {
    return;
  }

  services.drawToHTML(services.transformResponseFB(data.data));
})();

const postNewTodo = async evt => {
  evt.preventDefault();
  const task = {};
  const value = evt.target.elements[0].value;
  const name = evt.target.elements[0].name;
  task[name] = value;
  await services.putTodo(task);
  const data = await services.getTodo();

  services.drawToHTML(services.transformResponseFB(data.data));
};

services.refs.form.addEventListener("submit", postNewTodo);

const handleDelete = async evt => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  await services.delTodo(evt.target.closest("li").id);
  const data = await services.getTodo();

  services.drawToHTML(
    services.transformResponseFB(
      data.data ? data.data : [{ todo: "sorry, task not found !!(" }]
    )
  );
};

services.refs.wishesCloud.addEventListener("click", handleDelete);
