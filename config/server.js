module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3002),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2297a46e1e134e0e97abeb9ec9a0f393"),
    },
  },
});
