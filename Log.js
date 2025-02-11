class LogAim {
    constructor() {
        
    }

    info(text) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        console.log(`INFO ${hours}:${minutes}:${seconds} : ${text}`);
    }
}

module.exports = LogAim;