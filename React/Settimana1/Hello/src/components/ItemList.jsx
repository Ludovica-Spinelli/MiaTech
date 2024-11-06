const ItemList = ({colors}) => {
  return (
    <ul>Colori:
        {
            colors.map((color, index) => {
                return <li key={index}>{color}</li>;
            })
        }
    </ul>
  )
}

export default ItemList