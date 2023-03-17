// Import modules
import { renderReposSection } from "./render.js";
import { renderContactSection } from "./render.js";

async function router() {
    // Check hash
    const hash = window.location.hash.slice(1);
    const renderView = document.querySelector('#render-view');
    const repoList = document.querySelector('.repo-list');
    const contactContainer = document.querySelector('.contact-container');
  
    switch (hash) {
      //If hash has not been set, display repo section
      case "":
        if (!contactContainer && !repoList) {
          renderReposSection();
        } else if (contactContainer) {
          renderView.removeChild(contactContainer);
          renderReposSection();
        } else {
          console.log('Error');
        }
        break;

      //If hash is set to #contact, display contact section
      case "contact":
        if (!repoList && !contactContainer) {
          renderContactSection();
        } else if (repoList) {
          renderView.removeChild(repoList);
          renderContactSection();
        } else {
          console.log('Error');
        }
        break;
    }
  }

//Call the router funtion when the hash is altered
window.addEventListener('hashchange', router);

//Export router module
export default router;