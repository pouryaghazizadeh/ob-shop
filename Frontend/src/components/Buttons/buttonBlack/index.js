// style
import {ButtonBlacks} from "./view"
function ButtonBlack({ route, value, event }) {
  return <ButtonBlacks to={route} onClick={event}>{value}</ButtonBlacks>;
}

export default ButtonBlack;
