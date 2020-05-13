import {render,} from '@testing-library/react';
import Typography from '../Typography';


describe('<Typography />', () => {
    it('Should render p component by default', () => {
        const {getByText} = render(<Typography>Hello</Typography>);
       expect(getByText('Hello').tagName).toBe('P');
    });

    it('Should render h1', () => {
        const {getByText} = render(<Typography component = 'h1'>Hello</Typography>);
        expect(getByText('Hello').tagName).toBe('H1')
    });


    it('Should render h3', () => {
        const {getByText} = render(<Typography component = 'h3'>Hello</Typography>);
        expect(getByText('Hello').tagName).toBe('H3')
    });

    it('Should render h6', () => {
        const {getByText} = render(<Typography component = 'h6'>Hello</Typography>);
        expect(getByText('Hello').tagName).toBe('H6')
    });

    it('Should render p', () => {
        const {getByText} = render(<Typography component = 'p'>Hello</Typography>);
        expect(getByText('Hello').tagName).toBe('P')
    });

    it('Should render the correct component', () => {
        const {getByText} = render(<Typography component = 'div'>Hello</Typography>);
        expect(getByText('Hello').tagName).toBe('DIV');
    });

})