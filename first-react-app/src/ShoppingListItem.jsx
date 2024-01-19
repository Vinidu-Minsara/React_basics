import PropTypes from "prop-types";

function ShoppingListItem({name, qty, completed}){
    return (
        <li style={{color: completed ? 'red' : 'grey',
            textDecoration: completed ? 'line-through' : 'none'}}>
        {name} - {qty}
        </li>
    )
}

ShoppingListItem.prototype = {
    item: PropTypes.string,
    qty: PropTypes.number,
    completed: PropTypes.bool
}

export default ShoppingListItem