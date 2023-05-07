import { render, screen } from '@testing-library/react';
import MainContent from '../Components/MainContent';

describe('MainContent', () => {
    describe('handleBuildCardsList', () => {
        it('should return an array with 10 items', () => { 
            const { getByRole } = render(<MainContent />);
            const headingElement = getByRole('heading', { name: /Get points by clicking on an image but don't click on any more then once/i });
            const mainContentInstance = headingElement.parentNode.instance;
            mainContentInstance.handleBuildCardsList();
            expect(mainContentInstance.state.cardsList).toHaveLength(10);
         })
    })
})