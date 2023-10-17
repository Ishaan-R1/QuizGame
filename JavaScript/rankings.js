//Loads ranking table into rankings page
function DisplayRankingTable() {
    let tableRows = "<table><tr><th>Name</th><th>Score</th></tr>"; // Variable to hold HTML code creating table rows with the headers Name, Score and Time
    let br = "<br/><br/><br/><br/><br/><br/><br/><br/>";
  
    let i = 0;
    // while loop to iterate over keys in the created local storage object
    while (i < localStorage.length) {
      let users = localStorage.key(i);
      console.log("All Users with accounts: " + users); // Displays all the users that have created accounts to the console
      let user = JSON.parse(localStorage[users]); // Variable to turn all keys into an object
  
      /* Adds data to variable including 
      the users first name extracted from local storage, their top score and their final time */
      tableRows = `${tableRows} <tr><td> ${user.firstName} </td><td> ${user.topScore } </td></tr>`; 
      i++;
    }
    tableRows = `${tableRows} </table> ${br}`;
    document.getElementById("Ranking").innerHTML = tableRows; // The created table is now displayed in the rankings page
  }
  // instantly loads rankings table to page
  window.onload = () => {
    DisplayRankingTable();
  };
  