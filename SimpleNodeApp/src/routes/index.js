export default function setupRoutes(app) {
    app.get('/', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/style.css">
                <title>Docker Example</title>
            </head>
            <body>
                <h1>Docker Example!</h1>
            </body>
            </html>
        `);
    });
}