import localforage from "localforage";
import "./src/js/main.js";


export { localforage };
export { loadScores } from "./src/js/loadScores.js"; // re-export for external use
export { loadScoreStats } from "./src/js/loadScores.js";
export { getTxts } from "./src/js/loadTxts.js"; // re-export for external use
export { fetchTraits } from "./src/js/loadTraits.js";

