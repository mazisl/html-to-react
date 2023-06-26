import './card.styles.css';

function Card({singleCardInfo}) {

  const {name, nickName, background, imageUrl} = singleCardInfo;

  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={`${imageUrl}`} alt=""/>
      <p>{background}</p>
    </div>
  )
}

export default Card;