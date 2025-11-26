import './Item.css'
function Item(props){
    // const itemName = "nirma"
    const itemName = props.name
    return(
        <>
        <div>
            {/* <p className="nirma">Nirma</p> */}
            <p className="nirma">{itemName}</p>
        </div>
        </>
    )
}

export default Item;