import { useEffect, useState } from "react";
import { Container } from "./styles";
import productsArray from "../../utils/products.json";

interface ProductProps {
  id: string;
  name: string;
  image: string;
  quantity: string;
  category: string;
}

export function Products() {
  const [productsInfos, setProductsInfos] = useState<ProductProps[]>([]);

  useEffect(() => {
    setProductsInfos(productsArray);
  }, []);
  return (
    <Container>
      <thead>
        <th>Id</th>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Categoria</th>
      </thead>
      <tbody>
        {productsInfos.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              <img src={item.image} />
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
