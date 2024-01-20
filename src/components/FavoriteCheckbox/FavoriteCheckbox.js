import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { InputCheck, LabelCheck, WrapperCheck } from './FavoriteCheckbox.styled';

const FavoriteCheckbox = ({ isChecked, onChange }) => {
  return (
  <WrapperCheck>
    <LabelCheck>
      <InputCheck type="checkbox" checked={isChecked} onChange={() => onChange(!isChecked)} />
      {isChecked ? <FaHeart color='#3470FF' /> : <FaRegHeart color = "rgba(255, 255, 255, 0.80)"/>}
      </LabelCheck>
    </WrapperCheck>
  )
}

export default FavoriteCheckbox
