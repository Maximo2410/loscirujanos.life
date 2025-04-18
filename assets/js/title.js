// Array containing different titles to cycle through
var titles = [
  "Team FALOPA",
  "Team FALOPA | ",
  "Team FALOPA | M",
  "Team FALOPA | Ma",
  "Team FALOPA | Max",
  "Team FALOPA | Maxi",
  "Team FALOPA | Maxim",
  "Team FALOPA | Maximo",
  "Team FALOPA | MaximoD",
  "Team FALOPA | MaximoDe",
  "Team FALOPA | MaximoDev"
];

// Function to change the title periodically
function changeTitle() {
  var index = 0; // Initialize index to start from the first title

  // Set interval to change the title every 1000 milliseconds (1 second)
  setInterval(function() {
      // Set the document title to the title at the current index
      document.title = titles[index];
      // Increment the index and use modulo operator to ensure it stays within the bounds of the array
      index = (index + 1) % titles.length;
  }, 1000); // Interval set to 1000 milliseconds (1 second)
}

// Call the function to start changing the title
changeTitle();
