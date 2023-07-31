import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return <Oval
        ariaLabel="loading-indicator"
        height={10}
        width={10}
        strokeWidth={1}
        strokeWidthSecondary={2000}
        color="#3470FF"
        secondaryColor="#3470FF"
    />
};

export default Loader;