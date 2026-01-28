import { useInput } from "../../hooks/useInput";

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

function ReedDiffuserCalculator() {
  const volume = useInput("");
  const percent = useInput(20);
  const quantity = useInput(2);

  const basePerDiffuser = volume.value * (1 - percent.value / 100);
  const fragrancePerDiffuser = volume.value * (percent.value / 100);

  const basePerQuantity = basePerDiffuser * quantity.value;
  const fragrancePerQuantity = fragrancePerDiffuser * quantity.value;

  return (
    <Container>
      <Form>
        <Input
          label="Bottle volume (ml)"
          placeholder="Enter volume"
          value={volume.value}
          onChange={volume.handleChange}
        />
        {volume.error && <Error error={volume.error} />}
        <Input
          label="Fragrance load (%)"
          placeholder="Enter percentage"
          value={percent.value}
          onChange={percent.handleChange}
          hint={
            <Hint
              hint="Augeo: 10 - 25%, MMB: 20 - 30%"
              description="Check the IFRA certificate to find the maximum allowed fragrance load for a specific fragrance."
            />
          }
        />
        {percent.error && <Error error={percent.error} />}

        <Input
          label="Number of reed diffusers (pc)"
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
            <HeaderSecondary productName="reed diffuser" />
            <ResultItem name="Base" amount={basePerDiffuser.toFixed(2)} />
            <ResultItem
              name="Fragrance"
              amount={fragrancePerDiffuser.toFixed(2)}
            />
          </ResultList>
          <ResultList>
            <HeaderSecondary
              amount={quantity.value}
              productName="reed diffusers"
            />
            <ResultItem name="Base" amount={basePerQuantity.toFixed(2)} />
            <ResultItem
              name="Fragrance"
              amount={fragrancePerQuantity.toFixed(2)}
            />
          </ResultList>
        </ResultContainer>
      </Result>
    </Container>
  );
}

export default ReedDiffuserCalculator;
