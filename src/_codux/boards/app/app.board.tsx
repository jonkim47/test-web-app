import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 766,
        canvasHeight: 661,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
