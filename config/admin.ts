export default () => ({
  auth: {
    secret: '2DH+lArk2y+O6cuXT5IWNg==', // Replace with a secure random key
  },
  apiToken: {
    salt: '63Tc4qy3TBRhKmUCyvmJIw==', // Replace with a secure random salt
  },
  transfer: {
    token: {
      salt: 'LTYaAgiXPTS8wNyIPCSh4w==', // Replace with a secure random key
    },
  },
  flags: {
    nps: true,
    promoteEE: true,
  },
});
