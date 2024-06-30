$(document).ready(function () {
  // Seletores:
  const taskInputValue = $(".task-input");
  const submitButton = $("#submitButton");
  const ul = $("#taskList");
  const cleanTask = $("#clean-task");

  //   Guardando tarefas:
  let liList = [];

  // Funções:

  // Adicionar task a lista:
  const appendLi = () => {
    if (taskInputValue.val() == "") {
      alert(
        "Por favor, prencha o campo de tarefas para adiciona-la em sua lista"
      );
    } else {
      const li = $(`<li>${taskInputValue.val()}</li>`);
      ul.append(li);
      li.on("click", () => {
        li.attr("class", "checked");
      });
      liList.push(li);
      taskInputValue.val("");
      taskInputValue.focus();
    }
  };

  //   Limpar a lista:
  const clearList = () => {
    if (liList.length == 0) {
      alert("Sua lista já esta limpa");
    } else {
      ul.empty();
    }
  };

  // Eventos:
  submitButton.on("click", function (e) {
    e.preventDefault();
    appendLi();
  });
  cleanTask.on("click", function (e) {
    e.preventDefault();
    clearList();
  });
});
