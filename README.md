# Trybe Futebol Clube

Trybe Futebol Clube is a project developed as part of the "Trybe" course to simulate a Brazilian football league championship, featuring a points system, ongoing and finished matches, login system, and ranking system for all teams in the championship.

## Features

The project includes the following features:

- **Creation of new matches**: New matches can be created if the user has an admin role.
- **Edit ongoing matches**: The details of an ongoing match can be edited.
- **Finish a match**: Ongoing matches can be marked as finished.
- **View all matches**: It’s possible to view both ongoing and finished matches.
- **View the points table**: Displays the teams' standings, including home games, away games, or all games.

## Technologies Used

The project was developed using the following technologies:

- **Typescript**
- **OOP (Object-Oriented Programming)**
- **Javascript**
- **Node**
- **Docker**
- **Sequelize**
- **Mocha**

## Installation

To install and run the project locally, follow the steps below:

1. Clone the repository to your local machine: `git clone git@github.com:PedroEmmanuelBuerger/project-Trybe-Futebol-Clube.git`.
2. Install Node.js on your machine.
3. Install the project dependencies (both general dependencies and backend/frontend dependencies): 
cd project-Trybe-Futebol-Clube npm install && npm run install:apps
4. Start the Docker containers to run all environments: 
npm run compose:up
5. To access the frontend, go to: `http://localhost:3000`.

## Key Learnings

The main learning from this project was the use of all the tools provided in the Trybe course, including creating Dockerfile and Docker Compose files, using ORM libraries like Sequelize, Object-Oriented Programming with TypeScript, and unit testing with the Mocha library, among others. It was also an excellent experience building a full-stack application for the first time, integrating both frontend and backend in the same project.

## Conclusion

The Trybe Futebol Clube application provides an intuitive and manageable interface for a football league championship, allowing users to see which team is the home team in the league, view the team rankings, and check match results that contributed to the points standings.
