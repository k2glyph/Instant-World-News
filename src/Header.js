import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

import { observer } from 'mobx-react';


const styles = {
  list: {
    width: 250,
  },
};
@observer
class Header extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleNews =(value) => {
    this.props.history.push(`/news/${value}`);
    this.props.store.filter=value;
  }
  changeRoute = (path)=> {
    this.props.history.push(path);
  }
  
  render() {
    const { classes } = this.props;
    const { news, count } =this.props.store;
    const sideList = (
      <div className={classes.list}>
        <List>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', color: 'white', marginTop: -8, height: 74 }}>Instant World News</h2>
        <Divider />
        <ListItem button component={Link} to="/" onClick={()=> this.handleNews("/")}>
          <ListItemIcon>
          <i className="fa fa-home" aria-hidden="true" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/live" onClick={()=> this.handleNews("/live")}>
          <ListItemIcon>
            <i className="fa fa-video-camera" aria-hidden="true"></i>
          </ListItemIcon>
          <ListItemText primary="Live Videos" />
        </ListItem></List>
        <Divider />
        <List>
          <ListItem>
              <ListItemText primary={`${count} News Site`} />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>{
          news.map((outlet, i) => (
            <ListItem button key={outlet.id} component={Link} to={`/news/${outlet.id}`} onClick={()=> this.handleNews(outlet.id)}>
              <ListItemIcon>
                <i className="fa fa-file-text" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary={outlet.name} />
            </ListItem>
          ))
        }</List>
      </div>
    );
      return (
        <div className="appHeader">
          <Drawer 
            open={this.state.left} 
            onClose={this.toggleDrawer('left', false)}
            variant={this.props.checkDrawerOpen()?"permanent": ""}
            >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
          <div className="title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 'auto'}}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <h1>Instant World News</h1>
            <div></div>
          </div>
        </div>
    )
  }
    
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles) (Header));