const cardSection = {
    title : 'card section',
    name : 'cardSection',
    type: 'object',
    fields:[
     {title:'card Section Para' , name:'cardSectionPara', type:'string'},
     {title:'card Section Heading' , name:'cardSectionHeading', type:'string'},
     {title:'card Section Paragraph' , name:'cardSectionParagraph', type:'string'},

    {
        title: 'Cards',
        name : 'cards' ,
         type:'array',
         of:[
        {
            type: 'object',
            fields:[
                {title: 'Card Section Image' , name: 'cardSecImg' , type: 'image'},
                {title: 'Card Section Heading' , name: 'cardSectionHeading' , type: 'string'},
                {title: 'Card Section SubHeading' , name: 'cardSectionSubHeading' , type: 'string'},
                {title: 'Card Section Price' , name: 'cardSectionPrice' , type: 'number'},
            ]
        }
           
         ]




    }






    ]
}
export default cardSection