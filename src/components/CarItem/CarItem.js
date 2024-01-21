import { useEffect, useState } from "react";
import Button from "../Button/Button"
import { CarWrapper, Img, ImgWrap, TextCar, TextCarSpan, TextCarWrapper, TitleCarWrapper, TitleTextCar} from "./CarItem.styled"
import ModalDetailInf from "../ModalDetailInf/ModalDetailInf";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import FavoriteCheckbox from "../FavoriteCheckbox/FavoriteCheckbox";

export const CarItem = ({car}) => {
 const dispatch = useDispatch();
const favorites = useSelector(selectFavorites);
const [isChecked, setIsChecked] = useState(false);
  
useEffect(() => {
    const isCarInFavorites = favorites.items.some((item) => item.id === car.id);
    setIsChecked(isCarInFavorites);
  }, [favorites.items, car.id]);
const [isOpen, setIsOpen] = useState(false);

    const handleCheckboxChange = () => {
    if (isChecked) {
      dispatch(removeFavorite({ car }));
    } else {
      dispatch(addFavorite({ car }));
    }
    };
    
    const toggleModal = (open) => setIsOpen(open);

    const handleModalClose = () => toggleModal(false);

    const handleClick = () => toggleModal(true);

    
    return (
        <CarWrapper>
            <ImgWrap>
                <FavoriteCheckbox isChecked={isChecked} onChange={handleCheckboxChange}/>
                <Img src={car.img} />
            </ImgWrap>
        <TitleCarWrapper>
                
                <TitleTextCar>{car.make} <TextCarSpan>{car.model},</TextCarSpan> {car.year} </TitleTextCar>
                <TitleTextCar>{car.rentalPrice}</TitleTextCar>

        </TitleCarWrapper>
            <TextCarWrapper>
                <TextCar>{car.address.split(',')[1]}</TextCar>
                <TextCar>{car.address.split(',')[2]}</TextCar>
                <TextCar>{car.rentalCompany}</TextCar>
                <TextCar>{car.type}</TextCar>
                <TextCar>{car.model}</TextCar>
                <TextCar>{car.mileage.toLocaleString('en-US')}</TextCar>
                <TextCar>{car.accessories[0]}</TextCar>
            </TextCarWrapper>
            <Button text={"Learn more"} onClick={handleClick} width={274} />
            {isOpen && (
          <ModalDetailInf
            isOpen = {isOpen}
            car={car}
            onRequestClose={handleModalClose}
        />
      )}
        </CarWrapper>
    )
}