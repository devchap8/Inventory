# Games Storage

An inventory app for video games, built with Node.js, Express, EJS, and PostgreSQL as part of [The Odin Project](https://www.theodinproject.com/) Node.js course.

**Live demo:** https://inventory-pqhs.onrender.com/

> Hosted on Render's free tier, so the first load may take up to a minute while the server wakes up.

## Features

- Browse all games, with developer, release year, genres, and description
- Filter games by genre
- Add new games and edit existing ones
- Delete games (requires an admin password)

## Tech Stack

- **Backend:** Node.js, Express
- **Views:** EJS
- **Database:** PostgreSQL (hosted on Neon) with node-postgres
- **Deployment:** Render

## Running Locally

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/devchap8/Inventory.git
   cd Inventory
   npm install
   ```

2. Create a `.env` file in the project root:

   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/games
   ADMIN_PASSWORD=your_password
   ```

3. Create the tables in your Postgres database, then start the server:

   ```bash
   npm start
   ```

4. Open http://localhost:3000