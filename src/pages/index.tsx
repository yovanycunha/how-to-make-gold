import React, { useState } from 'react';

import base from '../../base.json'

import Background from '../components/Background';
import Content from '../components/Content'
import Input from '../components/Input';
import Button from '../components/Button';
import Chart from '../components/Chart';


export default function Home() {
  const [valorSedaCompra, setValorSedaCompra] = useState(0);
  const [valorSedaVenda, setValorSedaVenda] = useState(0);
  const [valorMinerioCompra, setValorMinerioCompra] = useState(0);
  const [valorMinerioVenda, setValorMinerioVenda] = useState(0);
  const [valorCouroCompra, setValorCouroCompra] = useState(0);
  const [valorCouroVenda, setValorCouroVenda] = useState(0);
  const [valorPo, setValorPo] = useState(0);
  const [rts, setRts] = useState([1, 1, 1]);


  function calculaRatio(valorCompra: number, valorVenda: number, valorPo: number) {
    let totalCompra: number = valorCompra * 200 + valorPo * 100;
    let ratio: number = totalCompra / (valorVenda * 100);
    return ratio;
  }

  function limpaValores() {
    setValorCouroVenda(0);
    setValorSedaCompra(0);
    setValorSedaVenda(0);
    setValorMinerioCompra(0);
    setValorMinerioVenda(0);
    setValorCouroCompra(0);
    setValorCouroVenda(0);
    setValorPo(0);
    setRts([1, 1, 1]);
  }

  function setRatios() {
    let ratios: any[] = [];
    let ratioSeda = calculaRatio(valorSedaCompra, valorSedaVenda, valorPo);
    let ratioMinerio = calculaRatio(valorMinerioCompra, valorMinerioVenda, valorPo);
    let ratioCouro = calculaRatio(valorCouroCompra, valorCouroVenda, valorPo);
    ratios.push(ratioSeda, ratioMinerio, ratioCouro);
    setRts(ratios);
    return ratios.push;
  }

  function convertToNumber(input: String) {
    let output: number = +input;
    return output;
  }

  return (
    <Background>
      <Content>
        <Content.Header>
          <h1>{base.title}</h1>
        </Content.Header>
        <Content.InputContainer>
          <Content.Header>
            <h3>{base.prices.pushcase}</h3>
          </Content.Header>
          <Content.Header>
            <h3>{base.prices.pushcase}</h3>
          </Content.Header>
          <Input
            value={valorSedaCompra}
            icon={base.icons['lightless-silk']}
            onChange={(infoSeda) => setValorSedaCompra(convertToNumber(infoSeda.target.value))} />
          <Input
            value={valorSedaVenda}
            icon={base.icons['enchanted-lightless-silk']}
            onChange={(infoPo) => setValorSedaVenda(convertToNumber(infoPo.target.value))} />
          <Input
            value={valorCouroCompra}
            icon={base.icons['heavy-callous-hide']}
            onChange={(infoMinerio) => setValorCouroCompra(convertToNumber(infoMinerio.target.value))} />
          <Input
            value={valorCouroVenda}
            icon={base.icons['enchanted-heavy-callous-hide']}
            onChange={(infoPo) => setValorCouroVenda(convertToNumber(infoPo.target.value))} />
          <Input
            value={valorMinerioCompra}
            icon={base.icons['elethium-ore']}
            onChange={(infoPo) => setValorMinerioCompra(convertToNumber(infoPo.target.value))} />
          <Input
            value={valorMinerioVenda}
            icon={base.icons['enchanted-elethium-bar']}
            onChange={(infoPo) => setValorMinerioVenda(convertToNumber(infoPo.target.value))} />
          <Input
            value={valorPo}
            icon={base.icons['soul-dust']}
            onChange={(infoPo) => setValorPo(convertToNumber(infoPo.target.value))} />


          <Button.Container>
            <Button onClick={setRatios}>
              Calcular
          </Button>

            <Button onClick={limpaValores}>
              Limpar
          </Button>
          </Button.Container>
        </Content.InputContainer>
        <div style={{ "height": "450px" }}>
          <Chart ratios={rts} />
        </div>
      </Content>
    </Background>
  )
}
