BANDAGE MarketPlace (Hackathon Journey)
DAY 1: LAYING THE FOUNDATION FOR YOUR MARKETPLACE JOURNEY
tasks completed

Define Your Business Goals
Create a Data Schema
Relationships Between Entities
Documented technical foundation, including a data schemq and workflow diagrams.
DAY 2 PLANNING THE TECHNICAL FOUNDATION
Define Technical Requirements Design System Architecture Plan API Requirements

Tasks completed
workflow

User Registration: [User] -> [Next.js Sign-Up Form] -> [Next.js API Route] -> [Sanity CMS] [Send Confirmation Email] -> [SendGrid/Mailgun API]
Product Browsing: [User] -> [Shop Page/Category Page] -> [Next.js API Route] -> [Sanity CMS] [Product Data Displayed] -> [Frontend (React Components)]
Order Placement: [User] -> [Add to Cart] -> [Checkout Page] -> [Payment (Stripe/PayPal API)] [Next.js API Route] -> [Sanity CMS] -> [Order Details Stored] [Send Confirmation Email] -> [SendGrid/Mailgun API]
schema
{ "product": { "id": "string", "title": "string", "description": "string", "price": "number", "oldPrice": "number",

DAY 3 - API INTEGRATION AND DATA MIGRATION
Understand the Provided API: Validate and Adjust Your Schema: Data Migration Options:

Task completed
api includes fields for a banner image, product images, headings, and prices. The schema ensures that the content is well-structured and can be easily managed through the Sanity Studio interface. To fetch the product data from Sanity, I used GROQ (Graph-Relational Object Queries), which is a query language designed specifically for querying Sanity's content

DAY 4 - BUILDING DYNAMIC FRONTEND COMPONENTS FOR YOUR MARKETPLACE
Product Listing Component: Product Detail Component

task completed
Developed the Product Listing Page with Add to Cart and Wishlist functionalities. Implemented dynamic routing for Individual Product Pages. Added a Search Bar in the header for real-time product searching. Integrated a Checkout Page for reviewing and completing purchases.

Day 5: Testing, Error Handling, and Backend Integration Refinement document
Ensuring the application functions as intended.

Tasks Completed:
Conducted functional testing for all workflows, including product listing, search, and cart operations. Performed performance testing using Lighthouse to analyze speed and responsiveness. Validated API responses with Thunder client and checked for security vulnerabilities.

Day 6: Deployment Preparation and Staging:
Deploying the application to a staging environment.
Tasks Completed:
Deployed the application to Vercel. Configured environment variables for secure API handling. Tested the environment for functionality, performance, and security.

Test Reports:
Functional Testing: Verified workflows for product listing, search, cart, and checkout. Performance Testing: Lighthouse score: Performance: 63 Accessibility: 84 SEO: 100 All test reports are available in the /documentation folder in the repository.
