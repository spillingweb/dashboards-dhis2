import { render, screen } from '@testing-library/react';
import { describe } from "vitest";
import CardsList from './CardsList';

describe('Cards List component', () => {
    // Test if dashboard cards are being rendered correctly
    test('renders cards if request succeeds', async () => {
        // Arrange
        render(<CardsList />)

        // Assert
        const listItemElements = await screen.findAllByRole('listitem', {}, {timeout:'5000'});
        expect(listItemElements).not.toHaveLength(0);
    });

    // 
});