const fetchemployeeById =(employees,uId)=>{
    return employees.filter(u=> u.project_id == uId)
}
module.exports={
    byId : fetchemployeeById
}