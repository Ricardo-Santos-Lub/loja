import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

// quando acessa uma url no navegador estamos fazendo um GET -> buscar dados
export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return Response.json({ products });
}

export async function POST(request : Request) {
    await dbConnect();
    const dados = await request.json();

    await Product.create({
        name: dados.name,
        price: dados.price,
        image: dados.image
    })
    
    return Response.json({ msg:"Produto cadastrado com sucesso." });
}

// quando enviamos dados usamos o POST