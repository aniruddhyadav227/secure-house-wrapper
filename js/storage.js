window.SHStorage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem("shw_" + key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem("shw_" + key, JSON.stringify(value));
    } catch (error) {
      console.warn("Could not save local setting.", error);
    }
  }
};