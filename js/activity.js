/* =====================================
   SECURE HOUSE WRAPPER
   Activity Log Manager
===================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "shw_activity_logs";
  const MAX_ENTRIES = 100;

  function getEntries() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const entries = saved ? JSON.parse(saved) : [];
      return Array.isArray(entries) ? entries : [];
    } catch (error) {
      console.warn("Unable to load activity logs:", error);
      return [];
    }
  }

  function saveEntries(entries) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(entries.slice(0, MAX_ENTRIES))
      );
    } catch (error) {
      console.warn("Unable to save activity logs:", error);
    }
  }

  function add(message) {
    if (!message || !String(message).trim()) return;

    const entries = getEntries();

    entries.unshift({
      id: Date.now() + Math.random(),
      message: String(message).trim(),
      time: new Date().toLocaleString()
    });

    saveEntries(entries);
    renderRecentActivity();
    updateActivityCount();
  }

  function renderRecentActivity() {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    timeline.replaceChildren();

    const entries = getEntries().slice(0, 5);

    if (entries.length === 0) {
      const empty = document.createElement("p");
      empty.textContent = "No activity recorded yet.";
      timeline.appendChild(empty);
      return;
    }

    entries.forEach(entry => {
      const item = document.createElement("div");
      item.className = "timeline-item";

      const dot = document.createElement("span");
      dot.className = "timeline-dot blue";

      const content = document.createElement("div");
      const title = document.createElement("strong");
      const time = document.createElement("small");

      title.textContent = entry.message;
      time.textContent = entry.time;

      content.append(title, time);
      item.append(dot, content);
      timeline.appendChild(item);
    });
  }

  function updateActivityCount() {
    const count = document.getElementById("activityCount");
    if (count) {
      count.textContent = String(getEntries().length).padStart(2, "0");
    }
  }

  function clear() {
    saveEntries([]);
    renderRecentActivity();
    updateActivityCount();
  }

  window.SHActivity = {
    get entries() {
      return getEntries();
    },
    add,
    clear,
    render: renderRecentActivity
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      renderRecentActivity();
      updateActivityCount();
    });
  } else {
    renderRecentActivity();
    updateActivityCount();
  }
})();