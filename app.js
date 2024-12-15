const express = require('express');
const AuthRoutes = require('./routes/authroute');
const TaskRoutes = require('./routes/taskRoute');
const {connectToMongoDB} = require('./db')


const PORT = process.env.PORT

const app = express();

//connection to MongoDB
connectToMongoDB()

app.use(express.json())

// Routes
app.use('/auth', AuthRoutes);
app.use('/tasks', TaskRoutes)


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Todo List API'})
})

// app.get('/users', (req, res)=>{
//     res.status(200).send(users)
// })
// app.get('/users/:id', (req, res)=>{
//     res.status(200).send(user)
// })

app.get('*', (req, res) => {
    res.json({ message: 'Route not found', code: 404 })
})


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})