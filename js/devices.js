/* ===== DASHBOARD LAYOUT FIX ===== */

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
  width: 100%;
}

body {
  overflow-x: hidden;
}

.app-shell {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
}

.sidebar {
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  padding: 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  text-decoration: none;
}

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  white-space: normal;
}

.sidebar-bottom {
  margin-top: auto;
}

.main-content {
  min-width: 0;
  width: 100%;
  padding: 32px;
  overflow: hidden;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.hero-card {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
  align-items: center;
  gap: 28px;
  width: 100%;
  min-height: 300px;
  padding: 36px;
  margin-bottom: 26px;
  overflow: hidden;
}

.hero-copy,
.hero-art {
  min-width: 0;
}

.hero-copy h2 {
  font-size: clamp(30px, 3vw, 48px);
  line-height: 1.15;
  margin: 22px 0 14px;
}

.hero-copy p {
  max-width: 520px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-art {
  min-height: 220px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.stat-card {
  min-width: 0;
  padding: 22px;
  border-radius: 16px;
}

.stat-card h3 {
  font-size: clamp(22px, 2vw, 32px);
  margin: 12px 0;
  overflow-wrap: anywhere;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  align-items: start;
}

.panel {
  min-width: 0;
  padding: 24px;
  border-radius: 18px;
}

.panel-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.device-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.device-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
}

.device-info {
  flex: 1;
  min-width: 0;
}

.device-info strong,
.device-info small {
  display: block;
}

.device-info small {
  margin-top: 5px;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  display: flex;
  gap: 14px;
}

.quick-actions {
  margin-top: 28px;
}

.quick-action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  padding: 20px 0;
}

/* ===== TABLET ===== */

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .main-content {
    padding: 24px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-card {
    padding: 26px;
    grid-template-columns: minmax(0, 1fr) minmax(160px, 0.7fr);
  }
}

/* ===== MOBILE ===== */

@media (max-width: 720px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    min-height: auto;
    padding: 18px;
  }

  .side-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sidebar-bottom {
    display: none;
  }

  .main-content {
    padding: 18px;
  }

  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero-card {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  .hero-art {
    min-height: 160px;
  }

  .stats-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 18px;
  }

  .footer {
    flex-direction: column;
  }
}