OOP Megaventory Application Classes
This repository contains JavaScript classes for a basic Megaventory application. The classes include:

Product
Client
InventoryLocation
Tax
Discount
SalesOrder
Product
The Product class represents a product in the Megaventory application. It has the following properties:

SKU: The product's SKU.
description: The product's description.
salesPrice: The product's sales price.
purchasePrice: The product's purchase price.
Client
The Client class represents a client in the Megaventory application. It has the following properties:

name: The client's name.
email: The client's email.
shippingAddress: The client's shipping address.
phone: The client's phone number.
InventoryLocation
The InventoryLocation class represents an inventory location in the Megaventory application. It has the following properties:

abbreviation: The inventory location's abbreviation.
name: The inventory location's name.
address: The inventory location's address.
Tax
The Tax class represents a tax in the Megaventory application. It has the following properties:

name: The tax's name.
description: The tax's description.
value: The tax's value.
Discount
The Discount class represents a discount in the Megaventory application. It has the following properties:

name: The discount's name.
description: The discount's description.
value: The discount's value.
SalesOrder
The SalesOrder class represents a sales order in the Megaventory application. It has the following properties:

product: An instance of the Product class.
client: An instance of the Client class.
inventoryLocation: An instance of the InventoryLocation class.
tax: An instance of the Tax class.
discount: An instance of the Discount class.
It also has a method calculateTotal() that calculates the total price of the sales order based on the product, tax, and discount properties.
