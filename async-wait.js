const fetchButton = document.getElementById("fetchButton");
const resultDiv = document.getElementById("result");

fetchButton.addEventListener("click", async () => {
  resultDiv.innerText = "Loading..."; // Display loading message
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    resultDiv.innerText = JSON.stringify(data.posts, null, 2); // Display fetched data
  } catch (error) {
    resultDiv.innerText = `Error: ${error.message}`; // Display error message
  }
});
