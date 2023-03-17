import api from "./api.js";

export async function renderReposSection() {
    const display = document.querySelector('#render-view');
  
    // Get repositories from the API
    const repos = await api.getRepositories();
  
    // Create title element
    const title = document.createElement('h2');
    title.textContent = "My Projects";

    // Create a new <ul> element
    const list = document.createElement('ul');
  
    // For each repository, create a new <li> element and add it to the list
    repos.map((repo) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const title = document.createElement('h3');
      const description = document.createElement('p');
  
      link.href = repo.url;
      title.textContent = repo.name;
      description.textContent = repo.description;
  
      list.appendChild(item);
      item.appendChild(link);
      link.appendChild(title);
      link.appendChild(description);
    });

    list.setAttribute('class', 'repo-list');
  
    // Clear the display and add the new list
    display.innerHTML = "";
    display.appendChild(title);
    display.appendChild(list);
  }

  export async function renderContactSection() {
    const display = document.querySelector('#render-view');

    // Get Profile from the API
    const profile = await api.getProfile();

    // Create title element
    const title = document.createElement('h2');
    title.textContent = "Contact Information";

    // Create a new <ul> element
    const contactContainer = document.createElement('div');
  
    // Create elements for contact information
      const emailTag = document.createElement('a');
      const companyTag = document.createElement('p');
      const profileTag = document.createElement('p');
  
      emailTag.href = profile.email;
      emailTag.textContent = profile.email;
      companyTag.textContent = profile.company;
      profileTag.textContent = profile.login;
  

      contactContainer.appendChild(emailTag);
      contactContainer.appendChild(companyTag);
      contactContainer.appendChild(profileTag);

      contactContainer.setAttribute('class', 'contact-container');
  
    // Clear the display and add the new list
    display.innerHTML = "";
    display.appendChild(title);
    display.appendChild(contactContainer);
  }

