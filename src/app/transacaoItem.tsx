import React from "react";
import './transacaoItem.css';


interface TransacaoItemProps{
    descricao: string,
    tipo: string,
    valor: number,
    banco: string,
    data: string

}

const TransacaoItem = ({descricao, tipo, valor, banco, data}:TransacaoItemProps) =>{
    
    let cor:string;

    if (valor < 500){
        cor = '#dc2626';
    }else{
        cor = '#16a34a';
    }

    return(
        <div className="linha-dado">
          <span>{descricao}</span>
          <span>{tipo}</span>
          <span style={{ color: cor }}>R$ {valor},00</span>
          <span>{banco}</span>
          <span>{data}</span>
        </div>
    )
}

export default TransacaoItem;