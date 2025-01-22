

const MainPage ={
    title : 'LandingPage',
    name : 'landingPage',
    type: 'document',
    fields:[
       {
        title: 'Sections',
        name : 'sections',
        type: 'array',
        of : [
            {type: 'hero'},
            {type : 'cardSection'}
        ]

       }
    ]
}
export default MainPage

