import React, { useState } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

function Task({ task, deleteTask, index }) {
    const [done, setDone] = useState(false)

    return(
        <ListItem button>
            <ListItemText>
                <Typography variant="subtitle1" component="h2" color={done ? 'primary' : 'inherit'}>
                    {task.content}
                </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton color={done ? 'primary' : 'default'} aria-label="delete" onClick={() => setDone(!done) }>
                    <CheckCircleIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="delete" onClick={() => deleteTask(index) }>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Task;