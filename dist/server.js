import { loadEnv } from "./loaders/env.loaders.js";
import { loadDatabase } from "./loaders/database.loader.js";
import { loadExpress } from "./loaders/express.loader.js";
const PORT = 3000;
const start = async () => {
    try {
        loadEnv();
        await loadDatabase();
        (await loadExpress()).listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    }
    catch (err) {
        console.error("Shutdown: DB connection failed", err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map