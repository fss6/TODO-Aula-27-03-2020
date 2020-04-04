import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { database } from './Firebase';

function Task({ task, index }) {
    const setDone = () => {
        database.collection('tasks')
        .doc(task.id)
        .update({ done: !task.done }) 
    }

    const removeTask = () => {
        database.collection('tasks')
        .doc(task.id)
        .delete()
        .then(() => {})
        .catch((e) => {console.log(e)}) 
    }

    return(
        <ListItem button>
            <ListItemText>
                <Typography variant="subtitle1" component="h2" color={task.done ? 'primary' : 'inherit'}>
                    {task.content}
                </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton color={task.done ? 'primary' : 'default'} aria-label="delete" onClick={() => setDone() }>
                    <CheckCircleIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="delete" onClick={() => removeTask() }>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Task;