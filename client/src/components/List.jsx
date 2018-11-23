import React, { Component } from 'react';
import ListSubGroup from './ListSubGroup';
import styles from './List.scss';

export default function List(props) {
  const items = props.items;
  const sites = props.sites;
  const list = items.map((item, index) => {
    if (item.sites.length > 0) {
      return (
        <ListSubGroup key={index} sites={sites} item={item}></ListSubGroup>
      );
    }
  });
  return (
    <div>
      {list}
    </div>
  );
}
