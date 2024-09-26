// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the button, message div, and data display div
  const button = document.getElementById("callbackButton");
  const message = document.getElementById("message");
  const dataDisplay = document.getElementById("dataDisplay");

  // Callback function to be executed after a delay
  function delayedCallback() {
    // Fetch data from the JSONPlaceholder API
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        // Extract post titles from the data
        const postTitles = data.posts
          .map((post) => `<p>${post.title}</p>`)
          .join("");
        // Display post titles in the dataDisplay div
        dataDisplay.innerHTML = `<strong>Post Titles:</strong><br>${postTitles}`;
      })
      .catch((error) => {
        // Handle any errors
        dataDisplay.textContent = `Error fetching data: ${error}`;
      });
  }

  // Event listener for button click
  button.addEventListener("click", () => {
    message.textContent = "Waiting for callback...";

    // Simulate delay using setTimeout and pass the callback function
    setTimeout(delayedCallback, 5000); // 5000ms = 5 seconds
  });
});
