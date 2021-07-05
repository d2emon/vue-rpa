export default {
    APP_NAME: process.env.APP_NAME || 'rpa',
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rpa',
    TOKEN_LIFETIME: process.env.TOKEN_LIFETIME || (30 * 60),
    CLIENT_ID: process.env.CLIENT_ID || 'rpaClient',
    CLIENT_SECRET: process.env.CLIENT_SECRET || 'thereisnospoon',
};