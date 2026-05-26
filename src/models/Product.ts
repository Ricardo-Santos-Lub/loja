import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    price: String,
    image: String
});

// garante que não cria o modelo duplicado
const Product = mongoose.models.Product || mongoose.model('Product', schema);
export default Product;

