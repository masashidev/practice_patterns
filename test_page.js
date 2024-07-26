function showPage(pageId) {

  const allPages = document.querySelectorAll('.page');
  allPages.forEach((page) => {
    page.style.display = 'none';
  });

  const page = document.getElementById(pageId);
  page.style.display = 'block';
}

const routes = {
  '/': homeComponent,
  '/about': aboutComponent,
  '/contact': contactComponent,
  "/profile": profileComponent,
  "/search": searchComponent,
};

function router (){
  const path = window.location.hash.slice(1) || '/';
  const component = routes[path] || notFoundComponent;
  document.getElementById("app").innerHTML = component()
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function homeComponent(){
  return "<h1>this is a home page </h1>"
}

function aboutComponent(){
  return "<h1>this is a about component page</h1>"
}


