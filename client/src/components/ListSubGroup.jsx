import React, { Component } from 'react';
import styles from './ListSubGroup.scss';
import { connect } from 'react-redux';
import classNames from 'classnames';

class ListSubGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };


    this.toggleShowing = this.toggleShowing.bind(this);
  }

  toggleShowing() {
    this.setState((state, props) => {
      return state.showing ? { showing: false } : { showing: true };
    });
  }

  render() {
    const sites = this.props.sites;
    const item = this.props.item;
    const listSubGroupClasses = classNames({
      [styles.show]: this.state.showing
    });
    return (
      <div className={listSubGroupClasses}>
        {this.state.showing}
        <h2 className={styles.list_heading} onClick={this.toggleShowing}>{item.name}</h2>
        <ul className={styles.list}>
          {item.sites.map((site, index) => {
            return <li className={styles.list_item} key={index}>{sites["byId"][site].name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    sites: state.sites
  }
}

export default connect(mapStateToProps)(ListSubGroup);
