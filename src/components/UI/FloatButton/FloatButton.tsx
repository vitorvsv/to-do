import classes from './FloatButton.module.css';

const FloatButton = (props: any) => (
  <div className={classes.FloatButton} onClick={props.clicked}>
    <div className={classes.AddIcon}></div>
  </div>
)

export default FloatButton;