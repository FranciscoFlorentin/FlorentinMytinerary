const cities=[
    {name:"Santa Fe", dir:"./assets/santa fe.jpg"},
    {name:"Montevideo", dir:"./assets/Montevideo.jpg"},
    {name:"Sao Paulo", dir:"./assets/Sao Paulo.jpg"},
    {name:"Cartagena", dir:"./assets/Cartagena.jpg"},{name:"Ámsterdam", dir:"./assets/amsterdam.jpg"},
    {name:"Lisbon", dir:"./assets/Lisboa.jpg"},
    {name:"Rome", dir:"./assets/roma.jpg"},
    {name:"Prague", dir:"./assets/praga.jpg"},{name:"Seoul", dir:"./assets/seul.jpg"},
    {name:"Shenzhen", dir:"./assets/shenzhen.jpg"},
    {name:"Bangkok", dir:"./assets/bangkok.jpg"},
    {name:"Beijing", dir:"./assets/pekin.jpg"}
]

const citiesController={
    allTheCities: (req,res)=>{
        res.json({
            response: cities
        })
    }
}

module.exports= citiesController;