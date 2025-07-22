import App from "./app";

const PORT = process.env.PORT || 3000;
const app = new App().app;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/users`);
});
