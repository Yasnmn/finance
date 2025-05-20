import React, { ReactNode } from "react";
import './ItemCategoria.css';


interface ItemCategoria{
    icon:ReactNode,
    title:string,
    price:number

}
const  ItemCategoria = ({icon, title, price}:ItemCategoria):ReactNode => {
    return(
            <li className="ItemGeral">
              {icon}
              <span>{title}</span>
              <span>R$ {price},00</span>
            </li>
    )
}

export default ItemCategoria;