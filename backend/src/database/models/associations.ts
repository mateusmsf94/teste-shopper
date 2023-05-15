import Pack from "./packModel";
import Product from "./productsModel";

Product.hasMany(Pack, {
  foreignKey: "product_id",
  as: "products",
});

Product.hasMany(Pack, {
  foreignKey: "pack_id",
  as: "packs",
});

Pack.belongsTo(Product, {
  foreignKey: "product_id",
  as: "productDetail",
});

Pack.belongsTo(Product, {
  foreignKey: "pack_id",
  as: "packDetail",
});