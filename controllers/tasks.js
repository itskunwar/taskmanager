const getAllTasks = (req,res)=>{
    res.send("Going goood!")
}

const createTask = (req,res)=>{
    res.send('Create Task')
}

const getTask = (req,res)=>{
    res.send('getting single task')
}

const updateTask = (req,res)=>{
    res.send('update task')
}

const deleteTask = (req,res)=>{
    res.send('deleteTask')
}

module.exports =  {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}