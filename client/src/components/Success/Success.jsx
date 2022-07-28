import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Success/Success.css';

const Success = () => {

    const location = useLocation(); 

    useEffect(() => {

    });
        
    return(
        <div className="success">
            <div className="message-banner">
                <h1>Congratulations!</h1>
                <p>Payment made Successfully</p>
            </div>
        </div>
    )
}

export default Success;