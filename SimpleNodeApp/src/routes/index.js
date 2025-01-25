

import { Router } from 'express';

const router = Router();
let message = "No messages Yet! 😐"
router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/style.css">
            </head>
            <body>
                <h1>Message Form</h1>
                <p>${message}</p>
                <form action="/submit" method="POST">
                    <label for="message">Message:</label>
                    <input type="text" id="message" name="message">
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
});

router.post('/submit', (req, res) => {
     message = req.body.message + " 😃";
    res.redirect("/");
});

export default (app) => {
    app.use('/', router);
};


