import React from 'react'
import Modal from 'react-modal'
import { IoCloseOutline } from "react-icons/io5";
import { ConditionsContainer, ConditionsSpan, ExitButton, Img, ModalContainer, ModalText, ModalTextCarSpan, ModalTitleText, ModalTitleTextCar, TextCarWrapperModal, WrapperConditions, customStyles } from './ModalDetailInf.styled'
import { TextCar, TextCarWrapper } from '../CarItem/CarItem.styled';
import Button from '../Button/Button';


const ModalDetailInf = ({ isOpen, car, onRequestClose }) => {
        
const handleClick = () => {
    window.location.href = 'tel:+380730000000';
}
    const age = car.rentalConditions.split('\n')[0];

    return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={customStyles}
      >
          
          <ModalContainer>
              <ExitButton onClick={onRequestClose}> <IoCloseOutline size={24} /></ExitButton>
              <Img src={car.img} />
              <ModalTitleTextCar>{car.make} <ModalTextCarSpan>{car.model},</ModalTextCarSpan> {car.year} </ModalTitleTextCar>
              <TextCarWrapperModal>
                <TextCar>{car.address.split(',')[1]}</TextCar>
                <TextCar>{car.address.split(',')[2]}</TextCar>
                <TextCar>Id: {car.id}</TextCar>
                <TextCar>Year: {car.year}</TextCar>
                <TextCar>Type: {car.type}</TextCar>
                <TextCar>Fuel Consumption: {car.fuelConsumption}</TextCar>
                <TextCar>Engine Size: {car.engineSize}</TextCar>
              </TextCarWrapperModal>

              <ModalText>{car.description}</ModalText>
              <ModalTitleText>Accessories and functionalities: </ModalTitleText>
              <TextCarWrapper>
                <TextCar>{car.accessories[0]}</TextCar>
                <TextCar>{car.accessories[1]}</TextCar>
                <TextCar>{car.accessories[2]}</TextCar>
                <TextCar>{car.functionalities[0]}</TextCar>
                <TextCar>{car.functionalities[1]}</TextCar>
                <TextCar>{car.functionalities[2]}</TextCar>

              </TextCarWrapper>
              <ModalTitleText>Rental Conditions: </ModalTitleText>
                <WrapperConditions>
                    <ConditionsContainer>{age.split(':')[0]} : <ConditionsSpan> {age.split(':')[1]}</ConditionsSpan> </ConditionsContainer>
                    <ConditionsContainer>{car.rentalConditions.split('\n')[1]}</ConditionsContainer>
                    <ConditionsContainer>{car.rentalConditions.split('\n')[2]}</ConditionsContainer>
                    <ConditionsContainer>Mileage: <ConditionsSpan>{car.mileage.toLocaleString('en-US')}</ConditionsSpan></ConditionsContainer>
                    <ConditionsContainer>Price: <ConditionsSpan>{car.rentalPrice}</ConditionsSpan></ConditionsContainer>
          </WrapperConditions>
          <Button text={"Rental car"} onClick={handleClick} width={168} />
          </ModalContainer>
    </Modal>
  )
}

export default ModalDetailInf
