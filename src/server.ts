import './loaders/env.loaders.js';
import { loadDatabase } from './loaders/database.loader.js';
import { loadExpress } from './loaders/express.loader.js';
import { config } from './config/index.js';

async function start() {
  try {
    await loadDatabase();
    (await loadExpress()).listen(config.serverPort, () => {
      console.log(`Server started on port ${config.serverPort}`);
    });
  } catch (err) {
    console.error('Shutdown: DB connection failed', err);
    process.exit(1);
  }
}

await start();
