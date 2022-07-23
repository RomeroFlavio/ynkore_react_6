import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';


const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('productos.json')
            .then((res) => res.json())
            .then((json) => setProductos(json))
    }, []);

    return (
        <div className="itemCount">
            {props.saludo}

            <div className='d-flex flex-row flex-wrap'>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}
export default ItemListContainer