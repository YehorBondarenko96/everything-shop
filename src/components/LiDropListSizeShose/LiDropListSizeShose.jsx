import {
  Li,
  Button
} from "./LiDropListSizeShose.styled";

export const LiDropListSizeShose = ({selected, value}) => { 
  return (
    <Li>
      <Button>
        {value}
      </Button>
    </Li>
  )
};