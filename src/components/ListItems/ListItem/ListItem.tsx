import React from 'react';

import CheckItem from './CheckItem/CheckItem';

import classes from './ListItem.module.css';

const ListItem = (props: any) => (
  <div className={classes.ListItem} onClick={() => props.clicked(props.listItem.id)}>
    <span>{props.listItem.text}</span>
    <div>
      <CheckItem 
        id={props.listItem.id}
        checked={props.listItem.checked} 
        clicked={props.clicked} />
    </div>
  </div>
)

export default ListItem;