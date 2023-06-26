import './characters-table.styles.css';

function Characters({characters}) {

  const data = characters.sort((a, b) => b.votes - a.votes).slice(0, 5);

  return (
    <div className='character-ratings'>
      <h4>Top Characters</h4>

      <table>
        <thead className='table-header'>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </thead>
        {data.map((char, charIndex) => {
          const {name, skillset, votes} = char;
          const newIndex = charIndex + 1;
          const isOdd = newIndex % 2 !== 0;
          return (
            <tr className={`${isOdd ? "dark" : "light"}`} key={name}>
              <td>{name}</td>
              <td>{skillset}</td>
              <td>{votes}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Characters;