module.export = class Product {
  constructor(sku, description, salesPrice, purchasePrice) {
    this.sku = sku;
    this.description = description;
    this.salesPrice = salesPrice;
    this.purchasePrice = purchasePrice;
  }

  getSKU() {
    return this.sku;
  }

  getDescription() {
    return this.description;
  }

  getSalesPrice() {
    return this.salesPrice;
  }

  getPurchasePrice() {
    return this.purchasePrice;
  }

  setSKU(sku) {
    if (sku > 0) {
      // Validation check to ensure SKU is not negative or zero.

      this.sku = sku; // If valid, set new SKU value to the property of the object instance
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

  setSalesPrice(price) {
    if (price > 0) {
      // Validation check to ensure price is not negative or zero.

      this.salesPrice = price; // If valid, set new price value to the property of the object instance

      return true; // Return true if successful
    } // If not valid, do not update the value and return false
    else return false; // Return false if unsuccessful
  }

  setPurchasePrice(price) {
    // Similar function as setSalesPrice(), but for Purchase Price instead

    if (price > 0) {
      // Validation check to ensure price is not negative or zero.

      this.purchasePrice = price; // If valid, set new price value to the property of the object instance

      return true; // Return true if successful
    } else {
      // If not valid, do not update the value and return false

      return false; // Return false if unsuccessful
    }
  }
};
