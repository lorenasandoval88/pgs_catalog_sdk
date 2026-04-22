

import localforage from "localforage";
import { loadTraitStats } from "./getPGS_loadTraits.js";
import { loadScoreStats } from "./getPGS_loadScores.js";

export async function initStats() {
  try {
    await Promise.allSettled([
      loadTraitStats(),
      loadScoreStats({ includeAllScoreStats: true, includeTraitStats: true, includeCategoryStats: true })
    ]);
  } catch (err) {
    console.error("Failed to initialize stats:", err);
  }
}

if (typeof window !== "undefined") {
  window.localforage = localforage;
  window.initStats = initStats;
  window.loadTraitStats = loadTraitStats;
  window.loadScoreStats = loadScoreStats;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initStats);
}

