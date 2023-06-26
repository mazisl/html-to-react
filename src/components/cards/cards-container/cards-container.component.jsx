import Card from '../card/card.component';

import './cards-container.styles.css';

function CardsContainer({cardInfos}) {

  return (
    <div className='character-cards'>
      {cardInfos.map((singleCardDetails) => {
        return (
          <Card singleCardInfo={singleCardDetails} key={singleCardDetails.name}/>
        )
      })}
    </div>
  )
}

export default CardsContainer;