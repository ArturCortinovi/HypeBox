import { Container } from "./styles";
import boxImg from "../../assets/images/box.svg";

export function Hero() {
  return (
    <Container>
      <div>
        <h1>Conheça nossa caixa mais que especial.</h1>
        <p>Tudo que você precisa em um só lugar!</p>
        <button>Acessar</button>
      </div>
      <div>
        <img src={boxImg} alt="caixa" />
      </div>
    </Container>
  );
}
