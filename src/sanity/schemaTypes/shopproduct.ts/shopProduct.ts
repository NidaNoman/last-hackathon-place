
const shopProducts ={
    title : 'shopProductPage',
    name : 'shopProductPage',
    type: 'document',
    fields:[
       {
        title: 'Sections',
        name : 'sections',
        type: 'array',
        of : [
            {type : 'shopCards'}
        ]

       }
    ]
}
export default shopProducts
