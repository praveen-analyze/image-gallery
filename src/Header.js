function Header() {
  return (
    <div style={{ textAlign: "center", padding: "10px", backgroundColor: "white", marginBottom:"10px", position:"sticky",top:"0",zIndex: 1000,
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",display:"flex", justifyContent:"space-between" }}>
      <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Nature Gallery</h1>
      <p>A collection of beautiful moments</p>
    </div>
  );
}
export default Header