import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, List, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Task from './Task';


function Todo() {
    const [tasks, setTask] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const value = event.target.content.value
        if ( value !== '' ) {
            setTask([...tasks, { content: value }])
            event.target.content.value = '';
        }
    }

    const deleteTask = (index) => {
        const items = tasks.filter((task, i) => {
            return index !== i
        })
        setTask(items)
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
                        <Task key={index} task={task} deleteTask={deleteTask} index={index} />
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