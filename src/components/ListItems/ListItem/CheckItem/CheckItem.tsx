import classes from './CheckItem.module.css'

const CheckItem = (props: any) => {
  let checkItemClasses = [classes.CheckItem];
  if (props.checked) checkItemClasses.push(classes.Checked);
  
  return (
    <div className={checkItemClasses.join(' ')}>
      <span className={classes.Checkmark}>
        <div className={classes.CheckmarkStem}></div>
        <div className={classes.CheckmarkKick}></div>
      </span>
    </div>
  )
}

export default CheckItem;