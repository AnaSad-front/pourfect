import { useInput } from "../../hooks/useInput";
import { BATH_BOMB_INGREDIENTS } from "../../data/config";

import Container from "../ui/calcForm/Container";
import Form from "../ui/calcForm/Form";
import Input from "../ui/calcForm/Input";
import Error from "../ui/calcForm/Error";
import Hint from "../ui/calcForm/Hint";
import Result from "../ui/calcForm/Result";
import ResultContainer from "../ui/calcForm/ResultContainer";
import ResultItem from "../ui/calcForm/ResultItem";
import ResultList from "../ui/calcForm/ResultList";
import Header from "../ui/calcForm/Header";
import HeaderSecondary from "../ui/calcForm/HeaderSecondary";

function BathBombCalculator() {
  const volume = useInput("");
  const quantity = useInput(2);

  const ingredientRows = BATH_BOMB_INGREDIENTS.map(({ name, ratio }) => {
    const perMold = Number(volume.value * ratio).toFixed(2);
    const perQuantity = Number(perMold * quantity.value).toFixed(2);

    return {
      name,
      perMold,
      perQuantity,
    };
  });

  return (
    <Container>
      <Form className="justify-start">
        <Input
          label="Mold volume (ml)"
          placeholder="Enter volume"
          value={volume.value}
          onChange={volume.handleChange}
        />
        {volume.error && <Error error={volume.error} />}
        <Input
          label="Number of molds (pc)"
          placeholder="Enter number"
          value={quantity.value}
          onChange={quantity.handleChange}
        />
        {quantity.error && <Error error={quantity.error} />}
      </Form>
      <Result>
        <Header />
        <ResultContainer>
          <ResultList>
            <HeaderSecondary productName="mold" />
            {ingredientRows.map(({ name, perMold }) => (
              <ResultItem key={name} name={name} amount={perMold} />
            ))}
          </ResultList>
          <ResultList>
            <HeaderSecondary amount={quantity.value} productName="molds" />
            {ingredientRows.map(({ name, perQuantity }) => (
              <ResultItem key={name} name={name} amount={perQuantity} />
            ))}
          </ResultList>
        </ResultContainer>
      </Result>
    </Container>
  );
}

export default BathBombCalculator;
