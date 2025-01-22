const ShopCards ={
    title : 'shop Cards',
    name : 'shopCards',
    type: 'object',
    fields:[
   {title:'shop Cards Heading' , name:'shopCardsHeading', type:'string'},
  

    {
        title: 'Cards',
        name : 'cards' ,
         type:'array',
         of:[
        {
            type: 'object',
            fields:[
                { title: "shop Cards Image", name: "shopCardsImg", type: "image" },
                {title: "shop Cards Heading",name: "shopCardsHeading", type: "string",},
                {title: "shop Cards SmallH",name: "shopCardsSmallH",type: "string"},
                { title: "shop Cards Old Price", name:"shopCardsOldPrice",type: "number"},
                { title: "shop Cards New Price", name: "shopCardsNewPrice",type: "number"},
              
            ]
        }
           
         ]




    }






    ]
}

export default ShopCards