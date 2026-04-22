import localforage from "localforage";

export { localforage };
export { loadAllScores,loadScores,fetchScores } from "./src/js/getPGS_loadScores.js"; // re-export for external use
export { loadScoreStats } from "./src/js/getPGS_loadScores.js";
export { getScoresPerTrait, getScoresPerCategory } from "./src/js/getPGS_loadScores.js";
export { getTxts } from "./src/js/getPGS_loadTxts.js"; // re-export for external use
export { fetchTraits, loadTraitStats, rawTraitArrayFromAPI } from "./src/js/getPGS_loadTraits.js";

