document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "Loading..."; // Show loading text

  // Create a promise to fetch data with a timeout
  const fetchPromise = new Promise((resolve, reject) => {
    // Set timeout for 5 seconds
    const timeout = setTimeout(() => {
      reject("Operation timed out.");
    }, 5000);

    // Fetch data from the API
    fetch("https://dummyjson.com/posts")
      .then((response) => {
        // Check if response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        clearTimeout(timeout); // Clear the timeout if data is fetched successfully
        resolve(data);
      })
      .catch((error) => {
        clearTimeout(timeout); // Clear the timeout in case of an error
        reject("Error fetching data: " + error.message);
      });
  });

  fetchPromise
    .then((data) => {
      // Display the fetched data
      let output = "<h3>Posts:</h3>";
      data.posts.forEach((post) => {
        output += `<p><strong>${post.title}</strong>: ${post.body}</p>`;
      });
      resultDiv.innerHTML = output; // Update the result div with fetched data
    })
    .catch((error) => {
      // Display the error message
      resultDiv.textContent = error; // Show error message in the result div
    });
}
