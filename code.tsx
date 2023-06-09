import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import styled from "styled-components";

const BurgerStyled = styled.div`
    display: inline;
    cursor: pointer;

    svg {
        transition: all 0.3s ease;
        transform: ${({ isOpen }) => isOpen && "rotate(-90deg)"};
    }
`;

const Burger = (props) => {
    return (
        <IconContext.Provider
            value={{
                size: "1.5em",
                color: "red",
            }}
        >
            <BurgerStyled isOpen={props.isOpen} onClick={() => props.onClick()}>
                <RxHamburgerMenu />
            </BurgerStyled>
        </IconContext.Provider>
    );
};

export default Burger;
