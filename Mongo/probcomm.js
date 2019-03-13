//Cost Incurred By Company
db.Employee3.aggregate([
    {
        $group:
            {
                "_id":"$company",
                "Total cost incurred by company is":
                    {
                        $sum:"$salary"
                    }
            }
    }
]);

//Cost Incurred By Project
db.Employee3.aggregate([
    {
        $group:
            {
                _id:"$project.name",
                "Total cost incurred by project is":
                    {
                        $sum:"$salary"
                    }
            }
    }
]);

//Highest Salary in Project
db.Employee3.aggregate([
    {
        $group:  
        {
             _id:"$project.name",
             "MaxSal":
                                 {
                                     $max:"$salary"
                                    },
                    data : {$push: {
                        Ename : "$name"
                    }}
        }
    },
        {
            $project:{
                Name :{ $arrayElemAt:["$data.Ename",0]},
                Sal: "$MaxSal"
            }
        }
]);

//Highest Salary in Company
db.Employee3.aggregate([
    {
        $group:  
        {
             _id:"$company",
             "MaxSal":
                                 {
                                     $max:"$salary"
                                    },
                    data : {$push: {
                        Ename : "$name"
                    }}
        }
    },
        {
            $project:{
                Name :{ $arrayElemAt:["$data.Ename",0]},
                Sal: "$MaxSal"
            }
        }
]);

//Lowest Salary in Company
db.Employee3.aggregate([
    {
        $group:  
        {
             _id:"$company",
             "MinSal":
                                 {
                                     $min:"$salary"
                                    },
                    data : {$push: {
                        Ename : "$name"
                    }}
        }
    },
        {
            $project:{
                Name :{ $arrayElemAt:["$data.Ename",0]},
                Sal: "$MinSal"
            }
        }
]);

//Lowest Salary in Project
db.Employee3.aggregate([
    {
        $group:  
        {
             _id:"$project.name",
             "MinSal":
                                 {
                                     $min:"$salary"
                                    },
                    data : {$push: {
                        Ename : "$name"
                    }}
        }
    },
        {
            $project:{
                Name :{ $arrayElemAt:["$data.Ename",0]},
                Sal: "$MinSal"
            }
        }
]);

//Number of Developers in a project
db.Employee3.aggregate([
    {
        $match:
        {
            designation:"Developer"
        }
    },
    {        
        $group:
        {
            _id:"$project.name",
            "Numbers Of Developers in this project are":
                   {
                        $sum:1
                    }       
        }
    }
]);


//Number of Managers in  Project
db.Employee3.aggregate([
        {
            $match:
            {
                designation:"Manager"
            }
        },
        {        
            $group:
            {
                _id:"$project.name",
                "Numbers Of Managers in this project are":
                       {
                            $sum:1
                        }       
            }
        }
    ]);