import api from "./api.js";

export async function renderHome() {
  const display = document.querySelector('main');

  // Get repositories from the API
  const repos = await api.getRepositories();

  // Create a new <ul> element
  const list = document.createElement('ul');

  // For each repository, create a new <li> element and add it to the list
  repos.map((repo) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const title = document.createElement('h2');
    const description = document.createElement('p');

    link.href = repo.url;
    title.textContent = repo.name;
    description.textContent = repo.description;

    list.appendChild(item);
    item.appendChild(link);
    link.appendChild(title);
    link.appendChild(description);
  });

  // Clear the display and add the new list
  display.innerHTML = '';
  display.appendChild(list);
}