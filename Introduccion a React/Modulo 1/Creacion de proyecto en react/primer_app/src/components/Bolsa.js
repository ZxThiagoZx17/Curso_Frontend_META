function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}  {/*Children hace que podamos usar varios props de otros componentes*/}
        </div>
    )
}
export default Bag