// script.js
document.getElementById("fetchDataButton").addEventListener("click", fetchData);

async function fetchData() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = "Loading..."; // Show loading message

  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    outputDiv.innerText = JSON.stringify(data.posts, null, 2); // Display fetched data
  } catch (error) {
    outputDiv.innerText = `Error: ${error.message}`; // Display error message
  }
}
