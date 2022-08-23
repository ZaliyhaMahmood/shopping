

import DirectoryItem, { CategoryItemProps } from '../directory-item/directory-item';
import './directory.styles.scss'

type DirectoryProps = {
  categories: CategoryItemProps[]
}

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
