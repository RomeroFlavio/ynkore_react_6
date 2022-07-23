import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([{}]);

    useEffect(() => {
        setTimeout(() => {
            fetch('productos.json')
            .then((res) => res.json())
            .then((json) => setProductos(json[0]))
        }, 2000);
    }, []);
    console.log(productos)
    return (

        <div key={productos.id}>
            <ItemDetail data={productos}/>
        </div>

    )
}
export default ItemDetailContainer