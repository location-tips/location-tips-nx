import { useFormStatus } from 'react-dom';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

type SearchButtonProps = {
  onClick?: () => void;
};

const SearchButton = ({ onClick }: SearchButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <MButton type="submit" disabled={pending} onClick={onClick}>
      Search
    </MButton>
  );
};

export default SearchButton;
