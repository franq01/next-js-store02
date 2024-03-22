
import { getProducts } from "@/src/services/shopify";

export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}