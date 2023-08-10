import * as React from 'react';
import WineCard from '../../components/WineCard';
import * as S from './winesList.styles';

interface ChildrenFirebaseWineProps {
  image: string;
  location: string;
  wine: string;
  wineId: number;
  winery: string;
}

interface WinesListProps {
  data: {
    categoryId: string;
    childrenFirebaseWine: ChildrenFirebaseWineProps[];
    title: string;
  };
}

const WinesList: React.FC<WinesListProps> = ({data}) => {
  return (
    <S.Container>
      <S.Title>{data.title}</S.Title>
      <S.WinesContainer>
        {data.childrenFirebaseWine.map((wine, index) => (
          <WineCard key={index} categoryId={data.categoryId} {...wine} />
        ))}
      </S.WinesContainer>
    </S.Container>
  );
};

export default WinesList;
