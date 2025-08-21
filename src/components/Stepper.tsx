interface Step {
    id: number;
    title: string;
};

interface StepperProps {
    steps: Step[];
    currentStep: number;
    onStepClick?: (stepId: number) => void;
};

const Stepper: React.FC<StepperProps> = ({steps, currentStep, onStepClick}) => {
    return (
        <div className='w-full'>
            <h5>Step {currentStep}: {steps.at(currentStep - 1)?.title}</h5>
            <div className='flex w-full mx-auto'>
                {steps.map((step, index) => {
                    const isFirst = index === 0;
                    const isLast = index === steps.length - 1;
                    const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;

                    const bgColor = isActive ? 'bg-[#3D74B6]' : isCompleted ? 'bg-[#3D74B6]' : 'bg-gray-300';

                    // Determine border radius classes
                    let roundedClasses = '';
                    if (isFirst && isLast) {
                    // Only one step
                    roundedClasses = 'rounded-full';
                    } else if (isFirst) {
                    // First step - rounded left corners
                    roundedClasses = 'rounded-l-full';
                    } else if (isLast) {
                    // Last step - rounded right corners
                    roundedClasses = 'rounded-r-full';
                    }
                    // Middle steps have no rounded corners (default)

                    return (
                        <div key={step.id}
                            className={`flex-1 px-4 py-1 text-center cursor-pointer transition-all duration-200 hover:opacity-80 ${bgColor} ${roundedClasses}`}>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default Stepper