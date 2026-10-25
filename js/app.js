(function () {
  const toast = document.getElementById("toast");

  function notify(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(window.__shToastTimer);
    window.__shToastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function updateSecurity() {
    const status = document.getElementById("securityStatus");
    const label = document.getElementById("securityToggleText");
    const button = document.getElementById("securityToggle");
    const armed = SHSecurity.armed;

    if (status) status.textContent = armed ? "Armed" : "Disarmed";
    if (label) label.textContent = armed
      ? "Security is Armed"
      : "Security is Disarmed";

    if (button) button.classList.toggle("disarmed", !armed);
  }

  updateSecurity();

  const securityButton = document.getElementById("securityToggle");

  if (securityButton) {
    securityButton.addEventListener("click", () => {
      const armed = SHSecurity.toggle();

      updateSecurity();
      SHActivity.add(armed
        ? "Demo security armed"
        : "Demo security disarmed");

      notify(armed ? "Demo security armed" : "Demo security disarmed");
    });
  }

  document.querySelectorAll("[data-device]").forEach(button => {
    const name = button.dataset.device;

    button.classList.toggle("on", Boolean(SHDevices.states[name]));

    button.addEventListener("click", () => {
      const enabled = SHDevices.toggle(name);
      button.classList.toggle("on", enabled);

      SHActivity.add(name + (enabled ? " turned on" : " turned off"));
      notify(name + (enabled ? " turned on" : " turned off"));
    });
  });

  const deviceCount = document.getElementById("deviceCount");

  if (deviceCount) {
    deviceCount.innerHTML =
      Object.keys(SHDevices.states).length + " <small>devices</small>";
  }

  const timeline = document.getElementById("timeline");

  if (timeline) {
    SHActivity.entries.slice(0, 4).forEach(entry => {
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
      timeline.prepend(item);
    });
  }
})();