import Pack from "./packModel";
import  Product  from "./productsModel";

Product.hasMany(Pack, {
  foreignKey: 'product_id',
  as: 'packsAsProduct',
});

Product.hasMany(Pack, {
  foreignKey: 'pack_id',
  as: 'packsAsPack',
});

Pack.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product',
});

Pack.belongsTo(Product, {
  foreignKey: 'pack_id',
  as: 'pack',
});