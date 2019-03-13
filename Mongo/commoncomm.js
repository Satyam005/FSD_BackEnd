 //Toltal Salary
db.Employee1.aggregate([
    {
        $group:
            {
                _id:0,
                "Total Salary is":
                    {
                        $sum:"$salary"
                    }
            }
    }
]);

 //Maximum Salary amomg all
db.Employee1.aggregate([
       {
           $group:  
           {
                _id:0,
                "Highest Salary of an employee is":
                                    {
                                        $max:"$salary"
                                       }
            }
        }
 ]);

 //Minimum Salary amomg all
db.Employee1.aggregate([
    {
        $group:  
        {
             _id:0,
             "Lowest Salary of any employee is":
                                 {
                                     $min:"$salary"
                                 }
        }
    }
]);

//Average salary
db.Employee1.aggregate([
    {
        $group:  
        {
             _id:0,
             "Average Salary of employee is":
                                 {
                                     $avg:"$salary"
                                 }
        }
    }
]);

db.Employee1.aggregate([
    {
        $group:
        {
            _id:0,total:
            {
                $sum:1
            }
        }
    }
]);