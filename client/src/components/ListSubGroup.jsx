import React, { Component } from 'react';
import styles from './ListSubGroup.scss';
import classNames from 'classnames';

/* Component for rendering sites within the project list menu */
class ListSubGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false, // is this current subgroup expanded or not
      selected: 0
    };

    this.toggleShowing = this.toggleShowing.bind(this);
  }
  /* Select a new site */
  selectSite(id, e) {
    this.props.selectSite(id);
  }

  /* Change the expanded local state of this subgroup */
  toggleShowing() {
    this.setState((state, props) => {
      return state.showing ? { showing: false } : { showing: true };
    });
  }

  render() {
    const sites = this.props.sites;
    const item = this.props.item;

    /* Define a conditional class to control visibility on this subgroup */
    const listSubGroupClasses = classNames({
      [styles.show]: this.state.showing
    });

    return (
      <div className={listSubGroupClasses}>
        {this.state.showing}
        <h2 className={styles.list_heading} onClick={this.toggleShowing}>
          {item.name}
        </h2>
        <ul className={styles.list}>
          {item.sites.map((site, index) => {
            return (
              <li
                className={styles.list_item}
                key={index}
                onClick={this.selectSite.bind(this, site)}
              >
                {sites[site].name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListSubGroup;
