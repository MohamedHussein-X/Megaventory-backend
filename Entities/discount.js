module.export = class Discount {
  constructor(name, description, value) {
    this.name = name;
    this.description = description;
    this.value = value;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getValue() {
    return this.value;
  }

  setName(name) {
    if (name.lenght > 0) {
      // Validation check to ensure that name is not empty.
      this.name = name; // If valid, set new desctription value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setDescription(description) {
    if (description.lenght > 0) {
      // Validation check to ensure that desctription is not empty.
      this.description = description; // If valid, set new desctription value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setValue(value) {
    if (value >= 0 && value <= 100) {
      // Validation check to ensure value is not negative or zero or bigger than 100.

      this.value = value; // If valid, set new value value to the property of the object instance

      return true; // Return true if successful
    } // If not valid, do not update the value and return false
    else return false; // Return false if unsuccessful
  }
};
