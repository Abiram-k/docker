import express from 'express';
import path from 'path';
import setupRoutes from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Setup routes
setupRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
