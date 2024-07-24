const stateMachine = {
  data: 1,
  change: function () {
    switch (this.data) {
      case 1:
        this.data = 2;
        break;
      case 2:
        this.data = 3;
        break;
      case 3:
        this.data = 1;
        break;
    }
  },
};

const app = document.getElementById("app");

const button = document.createElement("button");
button.innerHTML = "Change";
app.appendChild(button);
button.addEventListener("click", () => {
  stateMachine.change();
  console.log(stateMachine.data);
});
