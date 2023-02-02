module.export = class InventoryLocation {
  constructor(abbreviation, name, address) {
    this.abbreviation = abbreviation;
    this.name = name;
    this.address = address;
  }

  getAbbreviation() {
    return this.abbreviation;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  setAbbreviation(abbreviation) {
    if (abbreviation.lenght > 0) {
      // Validation check to ensure that abbreviation is not empty.
      this.abbreviation = abbreviation; // If valid, set new abbreviation value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setName(name) {
    if (name.lenght > 0) {
      // Validation check to ensure that name is not empty.
      this.name = name; // If valid, set new name value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setAddress(address) {
    if (address.lenght > 0) {
      // Validation check to ensure that address is not empty.
      this.address = address; // If valid, set new address value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }
};
