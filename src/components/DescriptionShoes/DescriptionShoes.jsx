import { Card } from "components/Card/Card";
import { AllDiv, Title, P } from "./DescriptionShoes.styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";

const DescriptionShoes = () => {
  const { id } = useParams();
  const shoes = useSelector(selectItems).find(item => item.id === id);
  return (
    <Card path={`/shoes-card/${id}`}>
      <AllDiv>
      <Title>DESCRIPTION</Title>
      <P>{shoes.description}</P>
    </AllDiv>
    </Card>
  )
};

export default DescriptionShoes