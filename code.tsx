import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const [showMenu, setShowMenu] = useState(false);

 <IconContext.Provider
                        value={{
                            size: "1.5em",
                            className: `nav__menu-burger ${
                                showMenu ? "nav__menu-burger--open" : ""
                            }`,
                        }}
                    >
                        <div
                            onClick={() => {
                                setShowMenu(!showMenu);
                            }}
                        >
                            <RxHamburgerMenu />
                        </div>
</IconContext.Provider>
