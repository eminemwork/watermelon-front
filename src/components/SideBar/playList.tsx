import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Util from "global/util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playList: {
      backgroundColor: theme.palette.background.paper,
      width: "240px",
      height: "100vh",
      display: "block",
      position: "fixed",
      zIndex: 1,
      overflow: "scroll",
      marginTop: theme.spacing(8),
    },
    scrollList: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function PalyList() {
  const classes = useStyles();
  const indexArr = [];
  for (let i = 0; i < 25; i += 1) {
    indexArr.push(i);
  }
  return (
    <>
      <div className={classes.playList}>
        <List>
          {Util.generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>,
            indexArr
          )}
        </List>
      </div>
    </>
  );
}
