import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

test('renders correctly', () => {
  render(
    <Card>
      <div>Test data</div>
    </Card>,
  );

  const card = screen.getByTestId('card');
  expect(card.className).toBe('card');
});
