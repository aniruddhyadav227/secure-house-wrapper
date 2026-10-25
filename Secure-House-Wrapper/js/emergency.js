window.SHEmergency = {
  get contacts() {
    return SHStorage.get("contacts", []);
  },

  add(name, phone) {
    if (!name.trim() || !phone.trim()) return false;

    const contacts = this.contacts;
    contacts.push({
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim()
    });

    SHStorage.set("contacts", contacts);
    return true;
  },

  remove(id) {
    SHStorage.set(
      "contacts",
      this.contacts.filter(contact => contact.id !== id)
    );
  }
};