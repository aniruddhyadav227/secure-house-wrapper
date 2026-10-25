window.SHSecurity = {
  get armed() {
    return SHStorage.get("armed", true);
  },

  toggle() {
    const nextState = !this.armed;
    SHStorage.set("armed", nextState);
    return nextState;
  }
};