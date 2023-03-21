import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <a href="/">HypeBox</a>
      <div>
        <a href="">Sobre</a>
        <a href="">Como funciona</a>
        <a href="/produtos">Produtos</a>
        <a href="">Acessar</a>
      </div>
    </Container>
  );
}
