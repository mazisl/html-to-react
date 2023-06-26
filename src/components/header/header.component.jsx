import './header.styles.css';

function Header({headerNav}) {

  return (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {headerNav.map((nav) => {
          return (
            <li key={nav}>{nav}</li>
          )
        })}
      </nav>
    </header>
  )
}

export default Header;