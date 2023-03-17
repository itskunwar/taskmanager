const express = require("express")
const tasks = require("./routes/tasks");
const app = express()

const PORT = 3000

app.use(express.json())



app.use("/api/v1/tasks",tasks)


app.listen(PORT,()=>{
    console.log("Server active at PORT:",PORT)
})
