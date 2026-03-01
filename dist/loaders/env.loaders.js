import path from "path";
import { fileURLToPath } from "url";
function loadEnv() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const PROJECT_ROOT = path.resolve(__dirname, "../../");
    console.log(process.env.PORT);
    return PROJECT_ROOT;
}
export { loadEnv };
//# sourceMappingURL=env.loaders.js.map