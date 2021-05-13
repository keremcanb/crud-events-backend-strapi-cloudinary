module.exports = ({ env }) => ({
  url: env("HEROKU_URL"),
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: ["http://localhost", "https://next-events.herokuapp.com"],
    },
  },
});
