const express = require('express')
const server = express()
const parser = require('body-parser')
const service = require('./employee-service')
// get employee data
let employeeData = require('./data1').employees
let projectData = require('./data1').projects

server.use(parser.json())
const PORT = 10987

// status api
server.get('/status',(rq,rs)=>{
    rs.send({ message: 'Server is Up & Runnning'})
})

// fetch all employees
server.get('/employees',(rq,rs)=>{
    rs.send({ data: employeeData })
})

// fetch employees by project_id
server.post('/employees/project_id/:project_id',(rq,rs)=>{
    rs.send({
        data : service.byId(employeeData,parseInt(rq.params.project_id))
    })
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})