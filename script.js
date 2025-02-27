const API_URL = "https://api.football-data.org/v2/matches";
const API_KEY = "YOUR_API_KEY"; // Replace with a real API key

async function fetchScores() {
    try {
        const response = await fetch(API_URL, {
            headers: { "X-Auth-Token": API_KEY }
        });
        const data = await response.json();
        displayScores(data.matches);
    } catch (error) {
        console.error("Error fetching scores:", error);
    }
}

function displayScores(matches) {
    const scoresDiv = document.getElementById("scores");
    scoresDiv.innerHTML = matches.map(match => `
        <p>${match.homeTeam.name} vs ${match.awayTeam.name}: 
        ${match.score.fullTime.homeTeam ?? "-"} - ${match.score.fullTime.awayTeam ?? "-"}</p>
    `).join("");
}

// Fetch scores every 30 seconds
fetchScores();
setInterval(fetchScores, 30000);
