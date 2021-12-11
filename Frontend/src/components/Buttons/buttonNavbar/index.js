
// style
import{ButtonNavbars} from "./view"
function ButtonNavbar({route,value}) {
    return (
      <ButtonNavbars
        to={route}
     
      >
        {value}
      </ButtonNavbars>
    );
}

export default ButtonNavbar;
