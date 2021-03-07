import React from 'react';

import Overlay from '../Overlay/Overlay';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.Loading}>
      <div className={classes.centered}>
        <div className={[classes.dot, classes.delay1].join(' ')}></div>
        <div className={[classes.dot, classes.delay2].join(' ')}></div>
        <div className={[classes.dot, classes.delay3].join(' ')}></div>
      </div>
      <Overlay clicked={() => {}}/>
    </div>
  )
}

export default Loading;