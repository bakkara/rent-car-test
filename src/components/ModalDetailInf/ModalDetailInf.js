import React from 'react'
import Modal from 'react-modal'
import { IoCloseOutline } from "react-icons/io5";
import { ExitButton, Img, ModalContainer, customStyles } from './ModalDetailInf.styled'
import { TextCar, TextCarSpan, TextCarWrapper, TitleTextCar } from '../CarItem/CarItem.styled';
import Button from '../Button/Button';

const ModalDetailInf = ({ isOpen, car, onRequestClose }) => {
        const handleClick = () => {
        window.location.href = 'tel:+380730000000';
    }
  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={customStyles}
      >
          
          <ModalContainer>
              <ExitButton onClick={onRequestClose}> <IoCloseOutline size={24} /></ExitButton>
              <Img src={car.img} />
              <TitleTextCar>{car.make} <TextCarSpan>{car.model},</TextCarSpan> {car.year} </TitleTextCar>
              <TextCarWrapper>
                <TextCar>{car.address.split(',')[1]}</TextCar>
                <TextCar>{car.address.split(',')[2]}</TextCar>
                <TextCar>Id: {car.id}</TextCar>
                <TextCar>Year: {car.year}</TextCar>
                <TextCar>Type: {car.type}</TextCar>
                <TextCar>Fuel Consumption: {car.fuelConsumption}</TextCar>
                <TextCar>Engine Size: {car.engineSize}</TextCar>
              </TextCarWrapper>

              <p>{car.description}</p>
              <p>Accessories and functionalities: </p>
              <TextCarWrapper>
                <TextCar>{car.accessories[0]}</TextCar>
                <TextCar>{car.accessories[1]}</TextCar>
                  <TextCar>{car.accessories[2]}</TextCar>
                  <TextCar>{car.functionalities[0]}</TextCar>
                <TextCar>{car.functionalities[1]}</TextCar>
               <TextCar>{car.functionalities[2]}</TextCar>

              </TextCarWrapper>
              <p>Rental Conditions: </p>
              
        <Button text={"Rental car"} onClick={handleClick} width={168}/>
          
          
          </ModalContainer>
    </Modal>
  )
}

export default ModalDetailInf
