# Twitter Project

## Description

This project is a basic implementation of a Twitter-like application. It allows users to create accounts, post tweets, and view a feed of tweets from other users.

## Features

- User authentication (sign up, log in, log out)
- Create and edit tweets
- View a feed of tweets from other users

**Note:** The features to follow and unfollow users, delete tweets, like and comment on tweets, and to post images are not yet implemented. Currently, users can only post text tweets.

## Framework

This project uses the following frameworks and technologies:
- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **API**: GraphQL

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/twitter-project.git
    ```
2. Navigate to the project directory:
    ```sh
    cd twitter-project
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=your-database-url
    JWT_SECRET=your-jwt-secret
    ```
5. Set up the database:
    ```sh
    npm run setup-db
    ```
6. Start the development server:
    ```sh
    npm start
    ```

## Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install frontend dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm start
    ```

## Backend Setup

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Install backend dependencies:
    ```sh
    npm install
    ```
3. Start the backend development server:
    ```sh
    npm start
    ```

## GraphQL Setup

1. Ensure that the GraphQL server is running as part of the backend setup.
2. Use a tool like Apollo Client in the frontend to interact with the GraphQL API.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up for a new account or log in with an existing account.
3. Start tweeting and interacting with other users!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Sahil Singh - [sahil.s39026@mail.com](mailto:sahil.s39026@mail.com)

Project Link: [https://github.com/CodeSahil21/Projects.git](https://github.com/CodeSahil21/Projects.git)
