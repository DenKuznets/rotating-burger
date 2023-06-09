import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const [showMenu, setShowMenu] = useState(false);

 <IconContext.Provider
                        value={{
                            size: "1.5em",
                            color: 'red',
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
