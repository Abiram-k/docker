import express from 'express';
import path from 'path';
import { setupRoutes } from './routes/index.js';

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Setup routes
setupRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});