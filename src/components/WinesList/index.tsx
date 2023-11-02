import * as React from 'react';
import {WinesListProps} from 'types/types';
import WineCard from '../../components/WineCard';
import * as S from './winesList.styles';

const WinesList: React.FC<WinesListProps> = ({data}) => {
  return (
    <S.Container>
      <S.WinesContainer>
        {data.childrenFirebaseWine.map((wine, index) => (
          <WineCard key={index} categoryId={data.categoryId} {...wine} />
        ))}
      </S.WinesContainer>
    </S.Container>
  );
};

export default WinesList;
