const arr = [
  {
    text: "поступить в Intocode",
    done: true,
  },
  {
    text: "закончить Intocode",
    done: false,
  },
  {
    text: "Пройти собеседование",
    done: false,
  },
  {
    text: "Устроиться на работу",
    done: false,
  },
  {
    text: "Посадить дерево",
    done: true,
  },
];

function render(arr) {
  const list = document.querySelector("#list");
  arr.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item.text;
    list.append(div);
  });
}

render(arr);
