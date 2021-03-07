import classes from './Overlay.module.css';

const Overlay = (props: Props) => (
  <div className={classes.Overlay} onClick={props.clicked}></div>
)

interface Props {
  clicked: () => void
}

export default Overlay;