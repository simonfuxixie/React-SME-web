const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const nav_subitem_schema = new Schema({
  url: String,
  name: String,
});

const NavbarItemsSchema = new Schema ({
  nav_item_url: String,
  nav_item_name: String,
  nav_subitem: [nav_subitem_schema],
});

const NavbarItems = mongoose.model('NavbarItems', NavbarItemsSchema);

module.exports = NavbarItems;
