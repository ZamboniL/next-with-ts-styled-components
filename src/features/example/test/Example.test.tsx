import { render } from '@testing-library/react';
import Example from '../components/Example';

describe('<Example />', () => {
  it('Renders the component', () => {
    const { container } = render(<Example />);

    expect(container).toBeInTheDocument();
  });
});
