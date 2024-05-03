document.querySelector(".container .addbtn").addEventListener("click", () => {
  myfunc();
});

let list = [];
const display = (list) => {
  if (list == "")
    return (document.querySelector(".list_container").innerHTML =
      "you have finished all the task");
  else {
    return list.join("");
  }
};

const myfunc = () => {
  let inputValue = document.querySelector(".container input").value;
  if (inputValue === "") {
    alert("Enter the task name");
    return;
  } else {
    const item = `<div class = "list-items">
  <div class="task">${inputValue}</div>
    <button class="deletebtn">delete</button>
  </div>`;
    document.querySelector(".container input").value = "";
    list.push(item);

    list.forEach((items, index) => {
      const listItem = (document.querySelector(".list_container").innerHTML =
        display(list));
    });

    const buttonlist = document.querySelectorAll(".list-items .deletebtn ");

    buttonlist.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();

        const newlist = list;
        newlist.splice(index, 1);

        display(newlist);
      });
    });
  }
};
