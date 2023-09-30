const db = require("../util/database");

module.exports = class Patient {
  constructor(id, name, address, phone, email, image) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.image = image;
  }

  save() {
    return db.execute(
      "INSERT INTO patients (name, address, phone, email, image) VALUES (?, ?, ?, ?, ?)",
      [this.name, this.address, this.phone, this.email, null] //change image implementation
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM patients");
  }
};
