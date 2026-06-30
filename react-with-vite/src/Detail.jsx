import HTML from './assets/hero.png'

const name="mohammed ibrahim j";

function Detail(props){
    return (
        <div className="product">
            <img src={props.images} alt="product" />
            <p>Book Name: {props.name}</p>
            <p>Book Price: {props.price}</p>
        </div>
    );
}
Detail.defaultProps={
    name: "Ibu's Product",
    price: "Free",
    images: HTML
}

export default Detail;