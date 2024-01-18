// app.js or your main JavaScript file

const apiUrl = 'http://localhost:3001'; // Replace with your backend URL
let authToken = null; // Global variable to store the user's JWT token

async function startQuiz() {
  const username = prompt('Enter your username:'); // For simplicity, improve this in your UI
  const password = prompt('Enter your password:'); // For simplicity, improve this in your UI

  try {
    // Authenticate the user
    const loginResponse = await fetch(apiUrl + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const loginData = await loginResponse.json();
    authToken = loginData.token;

    // Fetch a random exercise
    const exerciseResponse = await fetch(apiUrl + '/exercises/getExercise?language=english', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const exerciseData = await exerciseResponse.json();

    // Handle the received data (exercise) here
    console.log(exerciseData);
  } catch (error) {
    console.error('Error starting quiz:', error);
  }
}

async function submitAnswer(answer) {
  try {
    // Submit the user's answer
    const response = await fetch(apiUrl + '/exercises/submitAnswer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ answer }),
    });

    const responseData = await response.json();

    // Handle the received data (response) here
    console.log(responseData);
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
}

async function getLeaderboard() {
  try {
    // Fetch the leaderboard
    const response = await fetch(apiUrl + '/leaderboard/getLeaderboard?language=english', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const leaderboardData = await response.json();

    // Handle the received data (leaderboard) here
    console.log(leaderboardData);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
  }
}
