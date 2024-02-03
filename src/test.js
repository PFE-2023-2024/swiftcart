import React, { useState } from 'react';
import MultiStep from 'react-multistep';

export default function AjouterProduit({ close }) {
    const [activeStep, setActiveStep] = useState(0);

    const handlePrevButton = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const handleNextButton = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const steps = [
        { title: 'Step 1', content: 'Step 1 Content' },
        { title: 'Step 2', content: 'Step 2 Content' },
        { title: 'Step 3', content: 'Step 3 Content' }
    ];

    return (
        <div className='AjouterProduit'>
            <MultiStep activeStep={activeStep}>
                {steps.map((step, index) => (
                    <div key={index} title={step.title}>
                        <h2>{step.title}</h2>
                        <p>{step.content}</p>
                    </div>
                ))}
            </MultiStep>
            <div className="custom-buttons">
                {activeStep > 0 && (
                    <button className="custom-prev-button" onClick={handlePrevButton}>
                        Précédent
                    </button>
                )}
                {activeStep < steps.length - 1 && (
                    <button className="custom-next-button" onClick={handleNextButton}>
                        Suivant
                    </button>
                )}
            </div>
        </div>
    );
}
