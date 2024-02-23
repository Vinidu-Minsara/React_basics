import {useState} from "react";

function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product: "", quantity: 0});

    const handleChange = (event) => {
        setFormData((currentData) => {
            return {
                ...currentData,
                [event.target.name] : event.target.value,
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: 0});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name</label>
            <input type="text" placeholder="Product Name" name="product" id="name" value={formData.product}
                   onChange={handleChange}/>
            <label htmlFor="quantity">Product Qty</label>
            <input type="text" placeholder="Product Name" name="quantity" id="quantity" value={formData.quantity}
                   onChange={handleChange}/>

            <button>Add Product</button>
        </form>
    )
}

export default ShoppingListForm