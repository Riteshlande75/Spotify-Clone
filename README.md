# Spotify-Clone

## Tech Stack
- Node.js (CommonJS)
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken) *(dependency present; auth routes not included in this repo yet)*
- cookie-parser
- dotenv

## Prerequisites
- Node.js installed
- MongoDB running (local or hosted)

## Environment Variables
Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

## Install
```bash
npm install
```

## Run
```bash
node server.js
```

The server starts on:
- **http://localhost:3000**

On startup, `server.js` calls the DB connector (`connectDb()`), which connects to MongoDB using `process.env.MONGO_URI`.

## Project Structure
```
.
├── server.js          # Starts the server (port 3000) and connects to MongoDB
├── src/
│   ├── app.js         # Express app setup (json + cookie-parser)
│   └── db/
│       └── db.js     # Mongoose connection using MONGO_URI
├── package.json
└── .env               # (create this)
```

## Notes
- If `MONGO_URI` is missing or incorrect, DB connection will fail and an error will be logged.

