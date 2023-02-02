module.export = class Client {
  constructor(name, email, shippingAddress, phone) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.phone = phone;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getShippingAddress() {
    return this.shippingAddress;
  }

  getPhone() {
    return this.phone;
  }

  setName(name) {
    if (name.lenght > 0) {
      // Validation check to ensure that name is not empty.
      this.name = name; // If valid, set new name value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setEmail(email) {
    if (email.lenght > 0) {
      // Validation check to ensure that email is not empty.
      this.email = email; // If valid, set new email value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }

  setPhone(phone) {
    if (phone > 0) {
      // Validation check to ensure phone is not negative or zero.

      this.salesPrice = phone; // If valid, set new phone value to the property of the object instance

      return true; // Return true if successful
    } // If not valid, do not update the value and return false
    else return false; // Return false if unsuccessful
  }

  setDescription(shippingAddress) {
    if (shippingAddress.lenght > 0) {
      // Validation check to ensure thatshippingAddress is not empty.
      this.shippingAddress = shippingAddress; // If valid, set new shippingAddress value to the property of the object instance

      return true; // Return true if successful
    } else return false; // Return false if unsuccessful
  }
};
