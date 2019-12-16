import React from 'react';
import './ProductItem.css';
// Pentru a conecta componenta la store importam HOC-ul connect
import { connect } from 'react-redux';
// Trebuie sa importam actiunile pe care le vom utiliza(dispatch-ui).
import { addToCart } from '../redux/actions/cart';

const ProductItem = (props) => {
    // Trebuie sa extragem si id-ul pentru ca in reducerul ce aduaga in cart il folosim.
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-4 d-flex flex-column align-items-center mb-3">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    };
}

// TODO: explica-l pe connect
export default connect(null, mapDispatchToProps)(ProductItem);