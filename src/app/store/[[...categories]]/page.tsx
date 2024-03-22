import { ProductsWrapper } from "@/src/components/Store/Productswrapper"
import { getProducts } from "@/src/services/shopify/products"
import { getCollectionProducts, getCollections } from "@/src/services/shopify/collections"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()
  const { categories } = props.params
  let products = []
  const collections = await getCollections()

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
    products = await getCollectionProducts(selectedCollectionId)
  }else {
    products = await getProducts()
  }

  console.log('products', products)

  return (
    <ProductsWrapper products={products} />
  )
}