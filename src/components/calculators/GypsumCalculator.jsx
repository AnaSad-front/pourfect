import { useInput } from "../../hooks/useInput";
import { GYPSUM_RATIO, WATER_RATIO } from "../../data/config";

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

function GypsumCalculator() {
  const volume = useInput("");
  const plasticizerPercent = useInput(3);
  const titaniumDioxidePercent = useInput(5);
  const quantity = useInput(2);

  // per 1 mold
  const gypsumPerMold = volume.value * GYPSUM_RATIO;
  const waterPerMold = gypsumPerMold * WATER_RATIO;
  const plasticizerPerMold = gypsumPerMold * (plasticizerPercent.value / 100);
  const titaniumDioxidePerMold =
    gypsumPerMold * (titaniumDioxidePercent.value / 100);

  // per quantity
  const gypsumPerQuantity = gypsumPerMold * quantity.value;
  const waterPerQuantity = waterPerMold * quantity.value;
  const plasticizerPerQuantity = plasticizerPerMold * quantity.value;
  const titaniumDioxidePerQuantity = titaniumDioxidePerMold * quantity.value;

  return (
    <Container>
      <Form>
        <Input
          label="Mold volume (ml)"
          placeholder="Enter volume"
          value={volume.value}
          onChange={volume.handleChange}
        />
        {volume.error && <Error error={volume.error} />}
        <Input
          label="Plasticizer / SVV-500 (%)"
          placeholder="Enter percentage"
          value={plasticizerPercent.value}
          onChange={plasticizerPercent.handleChange}
          hint={
            <Hint
              hint="1 - 5%"
              description="Check the plasticizer manufacturer's recommendations to find the correct percentages"
            />
          }
        />
        {plasticizerPercent.error && <Error error={plasticizerPercent.error} />}
        <Input
          label="Titanium Dioxide (%)"
          placeholder="Enter percentage"
          value={titaniumDioxidePercent.value}
          onChange={titaniumDioxidePercent.handleChange}
          hint={
            <Hint
              hint="2 - 7%"
              description="Check the titanium dioxide manufacturer's recommendations to find the correct percentages"
            />
          }
        />
        {titaniumDioxidePercent.error && (
          <Error error={titaniumDioxidePercent.error} />
        )}

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
            <ResultItem name="Gypsum" amount={gypsumPerMold.toFixed(2)} />
            <ResultItem
              name="Plasticizer"
              amount={plasticizerPerMold.toFixed(2)}
            />
            <ResultItem
              name="Titanium Dioxide"
              amount={titaniumDioxidePerMold.toFixed(2)}
            />
            <ResultItem name="Water" amount={waterPerMold.toFixed(2)} />
          </ResultList>
          <ResultList>
            <HeaderSecondary amount={quantity.value} productName="molds" />
            <ResultItem name="Gypsum" amount={gypsumPerQuantity.toFixed(2)} />
            <ResultItem
              name="Plasticizer"
              amount={plasticizerPerQuantity.toFixed(2)}
            />
            <ResultItem
              name="Titanium Dioxide"
              amount={titaniumDioxidePerQuantity.toFixed(2)}
            />
            <ResultItem name="Water" amount={waterPerQuantity.toFixed(2)} />
          </ResultList>
        </ResultContainer>
      </Result>
    </Container>
  );
}

export default GypsumCalculator;
