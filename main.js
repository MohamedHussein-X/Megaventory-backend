import Product from "./Entities/product.js";
import Client from "./Entities/client.js";
import Discount from "./Entities/discount.js";
import Tax from "./Entities/tax.js";
import InventoryLocation from "./Entities/inventory location.js";
import SalesOrder from "./Entities/sales order.js";

const product = new Product(1112256, "Nike shoes", 99.99, 44.99);
const client = new Client(
  "babis",
  "babis@exampletest.com",
  "Example 8, Athens",
  1235698967
);
const inventoryLocation = new InventoryLocation(
  "Test",
  "Test Project Location",
  "Example 20, Athens"
);
const tax = new Tax("VAT", "VAT GR", 24);
const discount = new Discount("Loyalty", "Loyalty Customer Discount", 50);
const salesOrder = new SalesOrder(
  product,
  client,
  inventoryLocation,
  tax,
  discount
);
