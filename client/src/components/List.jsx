import React, { Component } from 'react';
import ListSubGroup from './ListSubGroup';

/* Renders the site selection vertical menu */
class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    const sites = this.props.sites;
    const list = items.map((item, index) => {
      if (item.sites.length > 0) {
        return (
          <ListSubGroup
            key={index}
            sites={sites}
            item={item}
            selectSite={this.props.onClickSubitem}
          />
        );
      }
    });
    return <div>{list}</div>;
  }
}
export default List;
