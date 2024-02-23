import {useState} from "react";
import ShoppingListForm from "./ShoppingListForm.jsx";
import {v4 as uuid} from "uuid";

function ShoppingList(){
    const [items, setItems] = useState([
        { id : uuid(), product: "Banana", quantity: 8 },
        { id : uuid(), product: "Apple", quantity: 45 },
    ]);

    const addItem = (item) => {
        setItems((currentItem) => {
            return [...currentItem, {...item, id: uuid()}];
        });
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.product} - {item.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}

export default ShoppingList