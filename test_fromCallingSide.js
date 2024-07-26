const app = new App();

function globalFunction() {
  if(user.clicked.addButton){
    list.add(user.input.value);
  }
  if(app.started()){

  }
  if(loop.ended()){
    app.end();
  }
}

eventListeners.forEach((eventListener) => {
  eventListener.on('click', globalFunction);
})

function startApp(){
  app.start();

}
function endApp(){
  app.end();
}

function observeEvents(){
  eventListeners.forEach((eventListener) => {
    eventListener.observe();
  })
}

function addData(data){
  dataManager.addData(data);
}

function updateData(id, data){
  dataManager.updateData(id, data);
}

function deleteData(id){
  dataManager.deleteData(id);
}

function getData(id){
  dataManager.getData(id);
}

function clearData(){
  dataManager.clearData();
}

function displayData(){
  dataManager.displayData();
}

function hideData(){
  dataManager.hideData();
}

const pages = {
  home: "home",
  about: "about",
  contact: "contact",
  list: "list",
  map: "map",
  search: "search",
  settings: "settings",
}

const url = (page) => {
  return `https://www.example.com/${page}`;
}


