// Function to get all github repos
async function getRepositories() {
  //Try to fetch data from github api
    try {
      const url = "https://api.github.com/users/Michelwas97/repos";
      const response = await fetch(url);
  
      // Check if response is ok
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        const newArray = data.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
            url: repo.url
          };
        });
        return newArray;
      }

      // Catch errors
    } catch (error) {
      console.log(error);
    }
  }

//Export modules
export default {
    getRepositories
}