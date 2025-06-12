import app from './app.js';

const api_port = process.env.API_PORT || 3000;

app.listen(api_port, () => {
    console.log(`Server is running on port ${api_port}`);
    console.log(`API URL: http://localhost:${api_port}`);
});