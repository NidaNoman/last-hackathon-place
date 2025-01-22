
const productPage ={
    title : 'productPage',
    name : 'productPage',
    type: 'document',
    fields:[
       {
        title: 'Sections',
        name : 'sections',
        type: 'array',
        of : [
            {type : 'cardsSection'}
        ]

       }
    ]
}

export default productPage

