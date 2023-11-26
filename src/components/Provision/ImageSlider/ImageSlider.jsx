import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {CardMedia} from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const ImageSlider = ({images}) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images?.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>

            <AutoPlaySwipeableViews
                interval={2500}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>

                {images?.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <CardMedia
                                component="img"
                                height="200"
                                image={step}
                            />

                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default ImageSlider;