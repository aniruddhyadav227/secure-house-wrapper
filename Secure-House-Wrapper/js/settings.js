window.SHSettings = {
  get(key, fallback) {
    return SHStorage.get("setting_" + key, fallback);
  },

  set(key, value) {
    SHStorage.set("setting_" + key, value);
  }
};