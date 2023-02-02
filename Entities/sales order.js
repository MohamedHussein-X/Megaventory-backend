module.export = class SalesOrder {
  constructor(product, client, inventoryLocation, tax, discount) {
    this.product = product;
    this.client = client;
    this.inventoryLocation = inventoryLocation;
    this.tax = tax;
    this.discount = discount;
  }
  getProduct() {
    return this.product;
  }

  getClient() {
    return this.client;
  }

  getTax() {
    return this.tax;
  }

  getDiscount() {
    return this.discount;
  }

  getInventoryLocation() {
    return this.inventoryLocation;
  }

  setProduct(product) {
    if (product != null) {
      this.product = product;
      return true;
    } else return false;
  }

  setClient(client) {
    if (client != null) {
      this.client = client;
      return true;
    } else return false;
  }

  setInventoryLocation(inventoryLocation) {
    if (inventoryLocation != null) {
      this.inventoryLocation = inventoryLocation;
      return true;
    } else return false;
  }

  setTax(tax) {
    if (tax != null) {
      this.tax = tax;
      return true;
    } else return false;
  }
  setDiscount(discount) {
    if (discount != null) {
      this.discount = discount;
      return true;
    } else return false;
  }

  calculateTotal() {
    return (
      this.product.salesPrice +
      this.product.salesPrice * (this.tax.value / 100) -
      this.product.salesPrice * (this.discount.value / 100)
    );
  }
};
