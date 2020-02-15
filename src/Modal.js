import React from "react";
import {Carousel} from "./Carousel";
import {Color} from "./Color";
import {Size} from "./Size";
import "./Modal.css";

export function Modal({onClose, product}) {
    console.log(product.variation_attributes);

    return <div className='modal' onClick={onClose}>
        <Carousel images={product.image_groups[0].images.slice(1)}/>
        <div className='modal-description'>
            <h1>{product.name}</h1>
            <p>{product.currency.replace(product.currency, '\u00A3')}
                <span>{product.variants[0].price}</span></p>
            <div>
                {product.variation_attributes.map(({id, values}) => (
                    <div className={`modal-${id}`}>
                        {values.map((props) => VARIANT_COMPONENTS[id]({...props, image_groups: product.image_groups}))}
                    </div>
                ))}
            </div>
        </div>
    </div>
}

const VARIANT_COMPONENTS = {
    'color': Color,
    'size': Size
};