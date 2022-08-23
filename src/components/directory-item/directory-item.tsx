import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

export type CategoryItemProps = {
  imageUrl: string;
  title: string;
  route: string;
  id: number;
  quantity?: number
}

export type DirectoryItemProps = {
  category: CategoryItemProps
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={handleNavigate}>
      <BackgroundImage
        imageUrl={imageUrl}
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
