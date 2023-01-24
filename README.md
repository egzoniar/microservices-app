# Microservices App

This project is a simple NodeJS/Express app that utilizes micro-service architecture. The app is built with a Postgres database and uses Prisma as the ORM. The communication between services is achieved through event-driven subscribe events.

## Architecture Overview

![Screen Shot 2023-01-24 at 1 16 39 AM](https://user-images.githubusercontent.com/26700417/214184264-07ec3cf4-8ff8-43d6-a389-8c639c7f5394.png)
![Screen Shot 2023-01-24 at 1 17 22 AM](https://user-images.githubusercontent.com/26700417/214185025-91ecd0d5-fa3b-478b-9f09-6aed627384c9.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- NodeJS 
- Postgres 
- Prisma

### Installing

1. Clone the repository to your local machine `git clone git@github.com:egzoniar/microservices-app.git`

2. Install the dependencies `npm install`

3. Start the app on dev `npm run dev` or on prod `npm start`

## Built With

- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [Express](https://expressjs.com/) - The web framework
- [Postgres](https://www.postgresql.org/) - The database
- [Prisma](https://www.prisma.io/) - ORM
