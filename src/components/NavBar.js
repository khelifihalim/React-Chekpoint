const Navigation = () => {
    return(
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="www.google.com">
      Active
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="www.google.com">
      Link
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="www.google.com">
      Link
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="www.google.com">Disabled</a>
  </li>
</ul>
        </nav>

    )
}
export default Navigation;