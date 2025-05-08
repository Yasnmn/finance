'use client';

import { PiggyBank, CirclePlus, BanknoteArrowDown, BanknoteArrowUp, Utensils, Tv, Car, Dumbbell } from 'lucide-react';
import './globals.css';

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
          <strong>R$ 7.840,56</strong>
          <p className="texto">Somadas todas as entradas do período.</p>
        </div>

        <div className="resumo-box saida">
          <div className="resumo-topo">
            <span className="resumo-texto">Saídas</span>
            <BanknoteArrowDown size={22} color="#F9FAFB" />
          </div>
          <strong>R$ 1.580,45</strong>
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
            <li>
              <Utensils size={16} />
              <span>Alimentação</span>
              <span>R$ 800,00</span>
            </li>
            <li>
              <Tv size={16} />
              <span>Entretenimento</span>
              <span>R$ 300,00</span>
            </li>
            <li>
              <Car size={16} />
              <span>Transporte</span>
              <span>R$ 520,00</span>
            </li>
            <li>
              <Dumbbell size={16} />
              <span>Saúde</span>
              <span>R$ 250,00</span>
            </li>
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

        <div className="linha-dado">
          <span>Academia</span>
          <span>Débito</span>
          <span className="saida">R$ 150,00</span>
          <span>Nubank</span>
          <span>03/05/2025</span>
        </div>

        <div className="linha-dado">
          <span>Salário</span>
          <span>Crédito</span>
          <span className="entrada">R$ 3.500,00</span>
          <span>Nubank</span>
          <span>02/05/2025</span>
        </div>

        <div className="linha-dado">
          <span>Netflix</span>
          <span>Débito</span>
          <span className="saida">R$ 55,90</span>
          <span>Nubank</span>
          <span>30/04/2025</span>
        </div>
      </section>
    </div>
  );
}
