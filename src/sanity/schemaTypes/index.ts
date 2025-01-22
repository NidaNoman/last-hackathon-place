import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage-sections/landingPage'
import hero from './landingPage-sections/hero'
import cardSection from './landingPage-sections/cardSection'
import productPage from './product-page-sections/productPage'
import cardsSection from './product-page-sections/cardsSection'
import shopProduct from './shopproduct.ts/shopProduct'
import shopCards from './shopproduct.ts/shopCards'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage , hero , cardSection , productPage, cardsSection , shopProduct, shopCards],
}
