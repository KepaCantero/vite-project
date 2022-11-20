import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// https://testing-library.com/docs/queries/about/#priority
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
describe('App', () => {
    it('Renders hello world', () => {
        // ARRANGE
        render(<App />);
        // ACT
        // EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World');
    });
});
