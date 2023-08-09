import * as React from 'react';
import backArrow from '../../images/back-arrow.png';
import * as S from './button.styles';

interface ButtonProps {
  goBack?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({goBack, onClick}) => {
  return (
    <>
      {goBack && (
        <S.GoBackButton type="button" onClick={onClick}>
          <img src={backArrow} alt="Back arrow" />
        </S.GoBackButton>
      )}
    </>
  );
};

export default Button;
