import { useContext } from 'react';
import { AppContext } from './AppContext';

function FunctionContextComponent() {
    const theme = useContext(AppContext);

    const styles = {
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
        padding: "10px",
        margin: "10px",
        width: "300px"
    };

    return <div style={styles}>Function Component</div>;
}
export default FunctionContextComponent;