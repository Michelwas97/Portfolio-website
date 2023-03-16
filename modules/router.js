// Import modules
import { renderHome } from "./render.js";
import api from "./api.js";

async function router() {
    // Check hash
    const hash = window.location.hash.slice(1);
  
    const display = document.querySelector('main');
  
    switch (hash) {
      //If hash has not been set, display home page
      case "":
        display.textContent = "Welkom!";
        const repos = await api.getRepositories();
        renderHome(repos);
        break;
    }
  };

//Call the router funtion when the hash is altered
window.addEventListener('hashchange', router);

//Export router module
export default router;