import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    this.props.history.push('/');
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
        <ListItem button onClick={()=> this.changeRoute('/')}>
          <ListItemIcon>
          <i className="fa fa-home" aria-hidden="true" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={()=> this.changeRoute('/live')}>
          <ListItemIcon>
          <i className="fa fa-video" aria-hidden="true" />
          </ListItemIcon>
          <ListItemText primary="Live Videos" />
        </ListItem></List>
        <Divider />
        <h2><center>{count} News Site</center></h2>
        <List>{
          news.map((outlet, i) => (
            <ListItem button key={outlet.id} onClick={()=> this.handleNews(outlet.id)}>
              <ListItemIcon>
                <i className="fa fa-newspaper" aria-hidden="false" />
              </ListItemIcon>
              <ListItemText primary={outlet.name} />
            </ListItem>
          ))
        }</List>
      </div>
    );
      return (
        <div className="appHeader">
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
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