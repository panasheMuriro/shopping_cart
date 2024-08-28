export default function ProductCard(props) {
  return (
    <div
      style={{
        // height: 400,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 20,
        marginRight: 20,
        marginBottom: 10,
        width:300
      }}
    >
      <img src={props.pic} height={200}></img>
      <div>{props.description.substring(1,100)}...</div>
      <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>Price: {props.price}</div>
        <button style={{color:"white"}}>Add to cart</button>
      </div>
    </div>
  );
}
