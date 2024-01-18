import Button from "../Button/Button"
import { CarWrapper, Img, ImgWrap, TextCar, TextCarSpan, TextCarWrapper, TitleCarWrapper, TitleTextCar} from "./CarItem.styled"
// import { useDispatch } from 'react-redux';
// import { useState } from "react";

export const CarItem = ({car}) => {
//   const dispatch = useDispatch();
  
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleEditModalClose = () => {
//     setIsEditing(false);
    //     };
    
    const handleClick = () => {
        console.log('Hello')
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
        </CarWrapper>
    )
}