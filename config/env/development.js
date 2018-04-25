module.exports = {
    debug: true,
    cookieSecret: 'f1e55aec-c9c0-4639-bf47-f4a0e3e1618f',
    server: {
        host: "127.0.0.1",
        port: 8081
    },
    mongodb: {
        url: "mongodb://127.0.0.1/eventtrack"
    },
    logger: {
        logLevel:  'debug', // Default to this if the environment variable LOG_LEVEL is not set
        logPath: '/var/log',
        errorLog: 'errors.log',
        debugLog: 'debug.log'
    }
};
