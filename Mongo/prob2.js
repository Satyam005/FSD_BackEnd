db.Employee1.insertMany([
    {
        _id:1,
        name:"Goku",
        email:"goku@gmail.com",
        salary: 5100000,
        active: 1,
        project:{
            "id":3,
            "name":"Blockchain"
            }
    },
    {
        _id:2,
        name:"Vegeta",
        email:"vegeta@gmail.com",
        salary: 5120000,
        active: 1,
        project:{
            "id":3,
            "name":"Blockchain"
            }
    },
    {
        _id:3,
        name:"Gohan",
        email:"gohan@gmail.com",
        salary: 5200000,
        active: 0,
        project:{
            "id":2,
            "name":"Machine Learning"
            }
    },
    {
        _id:4,
        name:"Jiren",
        email:"jiren@gmail.com",
        salary: 5550000,
        active: 1,
        project:{
            "id":1,
            "name":"Full Stack Developement"
            }
    },
    {
        _id:5,
        name:"Ben",
        email:"ben@gmail.com",
        salary: 5123000,
        active: 0,
        project:{
            "id":1,
            "name":"Full Stack Developement"
            }
    }
])