import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const pageContent = (props) => {
    return(
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox"></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts"></ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        </div>
    )
}

export default withStyles(styles)(pageContent);
