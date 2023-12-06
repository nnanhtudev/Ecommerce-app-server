// seeders/seedProducts.js
const Product = require("../models/Product");
const productData = require("./productData");

const seedProducts = async () => {
  try {
    const productMap = productData.map((item) => ({
      category: item.category,
      photos: [item.img1, item.img2, item.img3, item.img4],
      long_desc: item.long_desc,
      short_desc: item.short_desc,
      name: item.name,
      price: item.price,
    }));

    // Save products to the database
    await Product.insertMany(productMap);

    console.log("Products seeded successfully.");
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};

module.exports = seedProducts;
