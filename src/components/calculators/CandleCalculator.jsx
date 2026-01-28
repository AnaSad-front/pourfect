import { useInput } from "../../hooks/useInput";
import { WAX_RATIO } from "../../data/config";

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

function CandleCalculator() {
  const volume = useInput("");
  const percent = useInput(7);
  const quantity = useInput(2);

  const totalWeightPerCandle = volume.value * WAX_RATIO;

  const waxPerCandle =
    percent.value === 0
      ? totalWeightPerCandle
      : totalWeightPerCandle / (1 + percent.value / 100);
  const fragrancePerCandle = waxPerCandle * (percent.value / 100);

  const waxPerQuantity = +waxPerCandle.toFixed(2) * quantity.value;
  const fragrancePerQuantity = +fragrancePerCandle.toFixed(2) * quantity.value;

  return (
    <Container>
      <Form>
        <Input
          label="Container volume (ml)"
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
              hint="0 - 12%"
              description="Check the wax manufacturer’s recommendations to find the correct fragrance load."
            />
          }
        />
        {percent.error && <Error error={percent.error} />}
        <Input
          label="Number of candles (pc)"
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
            <HeaderSecondary />
            <ResultItem amount={waxPerCandle.toFixed(2)} />
            <ResultItem
              name="Fragrance"
              amount={fragrancePerCandle.toFixed(2)}
            />
          </ResultList>
          <ResultList>
            <HeaderSecondary amount={quantity.value} productName="candles" />
            <ResultItem amount={waxPerQuantity.toFixed(2)} />
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

export default CandleCalculator;
