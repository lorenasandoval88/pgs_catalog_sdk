import localforage from "localforage";
import "./src/js/pgs_main.js";


export { localforage };
export { loadAllScores,loadScores,fetchScores } from "./src/js/pgs_loadScores.js"; // re-export for external use
export { loadScoreStats } from "./src/js/pgs_loadScores.js";
export { getTxts } from "./src/js/pgs_loadTxts.js"; // re-export for external use
export { fetchTraits } from "./src/js/pgs_loadTraits.js";

