import { CarWrapper, TextCar} from "./CarItem.styled"
// import { useDispatch } from 'react-redux';
// import { useState } from "react";

export const CarItem = ({
    car: { make },
}) => {
//   const dispatch = useDispatch();
  
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleEditModalClose = () => {
//     setIsEditing(false);
//     };
    
    return (
      <CarWrapper>
        <TextCar>
          <p>{make}: </p>

        </TextCar>
        
        </CarWrapper>
    )
}