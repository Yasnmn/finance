'use client';

import { PiggyBank, CirclePlus, BanknoteArrowDown, BanknoteArrowUp, Utensils, Tv, Car, Dumbbell } from 'lucide-react';
import './globals.css';
import ItemCategoria from './categoria';
import TransacaoItem from './transacaoItem';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="topo">
        <div className="titulo-logo">
          <PiggyBank size={40} color='#10B981' />
        </div>
        <button className="botao-novo">
          <CirclePlus size={24} />
        </button>
      </header>

      <section className="painel-resumo">
        <div className="resumo-box entrada">
          <div className="resumo-topo">
            <span className="resumo-texto">Entradas</span>
            <BanknoteArrowUp size={22} color="#F9FAFB" />
          </div>
          <strong style={{color:'green'}}>R$ 7.840,56</strong>
          <p className="texto">Somadas todas as entradas do período.</p>
        </div>

        <div className="resumo-box saida">
          <div className="resumo-topo">
            <span className="resumo-texto">Saídas</span>
            <BanknoteArrowDown size={22} color="#F9FAFB" />
          </div>
          <strong style={{color:'red'}}>R$ 1.580,45</strong>
          <p className="texto">Somadas todas as saídas do período.</p>
        </div>

        <div className="resumo-box saldo">
          <div className="resumo-topo">
            <span className="resumo-texto">Balanço</span>
            <BanknoteArrowDown size={22} color="#F9FAFB" />
          </div>
          <strong className="verde">R$ 6.260,11</strong>
          <p className="texto">Somadas todas as entradas e saídas do período.</p>
        </div>
      </section>

      <section className="area-graficos">
        <div className="bloco-grafico">
          <h2 className="Titulo">Análise</h2>
          <div className="grafico-placeholder"></div>
        </div>

        <div className="bloco-categorias">
          <h2 className="Titulo">Categorias</h2>
          <ul className="lista-categorias">
            <ItemCategoria icon={<Utensils size={16}/>} title='alimentação' price={800}/>
            <ItemCategoria icon={<Tv size={16} />} title='Entreterimento' price={300} />
            <ItemCategoria icon={<Car size={16} />} title='transporte' price={520}/>
            <ItemCategoria icon={<Dumbbell size={16} />} title='Saúde' price={250}/>
          </ul>
        </div>
      </section>

      <section className="tabela-transacoes">
        <h2 className="Titulo">Transações</h2>
        <div className="linha-cabecalho">
          <span>Descrição</span>
          <span>Tipo</span>
          <span>Valor</span>
          <span>Banco</span>
          <span>Data</span>
        </div>
          <TransacaoItem
            descricao="Academia"
            tipo="Débito"
            valor={150}
            banco="Nubank"
            data="03/05/2025"
          />

          <TransacaoItem
            descricao="Salário"
            tipo="Crédito"
            valor={3500}
            banco="Nubank"
            data="02/05/2025"
          />

          <TransacaoItem
            descricao="Netflix"
            tipo="Débito"
            valor={55.9}
            banco="Nubank"
            data="30/04/2025"
          />

      </section>
    </div>
  );
}
