const Item = ({data}) => {
    return <>
        <div className="estilo_tarjeta">
            <img src={data.url} className="card-img-top imgMedida" alt="img"/>
            <div>
                <h2 className="card-title">{data.nombre}</h2>
                <p className="card-text">{data.precio}</p>
                <p className="card-text">Stock: {data.stock}</p>
                <a href="#" className="btn btn-primary">Mas</a>
            </div>
        </div>
    </>;
}
export default Item;