import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { fixedData, newsWebsiteList } from './tileData';

const styles = {
  list: {
    width: 250,
  },
};
class Header extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{fixedData}</List>
        <Divider />
        <List>{newsWebsiteList}</List>
      </div>
    );
      return (
        <div className="appHeader">
          <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
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
          <div className="title">
            <h1>Instant World News</h1>
          </div>
        </div>
    )
  }
    
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (Header);