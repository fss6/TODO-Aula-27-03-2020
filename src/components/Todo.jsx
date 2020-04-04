import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, List, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Task from './Task';
import { database } from './Firebase';


function Todo() {
    const [tasks, setTask] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.content.value
        if ( value !== '' ) {
            const obj = { content: value, done: false }
            addTask(obj)
            event.target.content.value = '';
        }
    }

    useEffect(() => {
        const unsubscribe = database.collection('tasks')
        .onSnapshot((query) => {
            let docs = [];
            query.forEach((doc) => {
                const { content, done } = doc.data();
                docs.push({
                    id: doc.id,
                    content: content, 
                    done: done
                })
            })
            setTask(docs)
        })
        return unsubscribe;
    },[])

    const addTask = (obj) => {
        database.collection('tasks')
        .add(obj)
        .then((doc) => {})
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    TODO List
                </Typography>
                </Toolbar>
            </AppBar>
            <form onSubmit={handleSubmit}>
                <List dense>
                    {   
                        tasks.map((task, index) =>
                        <Task key={index} task={task} index={index} />
                    )}
                </List>
                <hr />
                <TextField
                    type="text" 
                    name="content" 
                    label="Digite uma tarefa" 
                    variant="outlined"
                    fullWidth />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
                    ADICIONAR TAREFA
                </Button>
            </form>
        </div>
    )
}


export default Todo;