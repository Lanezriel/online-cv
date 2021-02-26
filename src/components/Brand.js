function Brand(props) {
  return(
    <span className="navbar-item">
      { props.logo && <img src={props.logo} alt="Logo" />}
      <span className="brand-title">{props.title}</span>
    </span>
  );
}

export default Brand;