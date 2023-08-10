import * as React from 'react';
import * as S from './wineCard.styles';

interface WineCardProps {
  categoryId: string;
  image: string;
  location: string;
  wine: string;
  wineId: number;
  winery: string;
}

const WineCard: React.FC<WineCardProps> = (props) => {
  return (
    <S.StyledLink to={`/wines/${props.categoryId}/${props.wineId}`}>
      <S.Container>
        <S.Image src={props.image} width="50" />
        <div>
          <S.WineTitle>{props.wine}</S.WineTitle>
          <S.Winery>{props.winery}</S.Winery>
          <S.WineLocation>{props.location}</S.WineLocation>
        </div>
      </S.Container>
    </S.StyledLink>
  );
};

export default WineCard;
