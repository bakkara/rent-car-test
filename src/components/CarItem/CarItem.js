import { useState } from "react";
import Button from "../Button/Button"
import { CarWrapper, Img, ImgWrap, TextCar, TextCarSpan, TextCarWrapper, TitleCarWrapper, TitleTextCar} from "./CarItem.styled"
import ModalDetailInf from "../ModalDetailInf/ModalDetailInf";

export const CarItem = ({car}) => {
 
const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
        };
    
    const handleClick = () => {
        setIsOpen(true)
    }

    
    return (
        <CarWrapper>
            <ImgWrap>
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
                <TextCar>{car.mileage}</TextCar>
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