



const objects = []

objects.forEach((object) => {
  object.update();
  object.rendering();
})

const app = new App();

const eventListeners = {
  window: {
    resize: canvas.resize
  },
  sliders: {
    change: {
      update: display.update,
      render: display.render
    }
  },
  buttons: {
    click: display.render
  }
}

const functions = [
  {
    name: 'update',
    function: display.update
  },
  {
    name: 'render',
    function: display.render
  }
]

const functionsList = {
  update: display.update,
  render: display.render
}

list.row.update();
display.ifChanged().update();
const display = {
  changed: false,

  ifChanged() {
    if (this.changed) {
      // Reset the changed flag
      this.changed = false;
      // Return this object to allow chaining
      return this;
    }
    // Return a dummy object with an empty update method if not changed
    return {
      update: () => {}
    };
  },

  update() {
    console.log("Updating display");
    // Actual update logic would go here
  },

  // Method to simulate a change
  simulateChange() {
    this.changed = true;
  }
};

// Usage:
display.ifChanged().update(); // Nothing happens (not changed)
display.simulateChange();
display.ifChanged().update(); // "Updating display"

