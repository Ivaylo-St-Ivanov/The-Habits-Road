import React, { useState } from 'react';

import {
    StartUpPageWrapper, Overlay, H1, H3, BtnAndFormWrapper, FirstStepBtn
} from './styled';

import StartUpPageForm from '../../components/StartUpPageForm/StartUpPageForm';

interface StartUpPageProps { }

const StartUpPage: React.FC<StartUpPageProps> = () => {
    const [firstStepClick, setFirstStepClick] = useState<boolean>(false);

    return (
        <StartUpPageWrapper>
            <Overlay>
                <div>
                    {!firstStepClick && (
                        <>
                            <H1>Welcome to Your Habits Road</H1>
                            <H3>Take the First Step on This Journey</H3>
                        </>
                    )}

                    {firstStepClick && (
                        <>
                            <H1>Create Your Dashboard to Track Progress</H1>
                            <H3>Your Navigator for Personal Growth Starts Here</H3>
                        </>
                    )}
                </div>

                <BtnAndFormWrapper>
                    {!firstStepClick && (
                        <FirstStepBtn onClick={() => setFirstStepClick(true)}>
                            First step
                        </FirstStepBtn>
                    )}

                    {firstStepClick && (
                        <StartUpPageForm setFirstStepClick={setFirstStepClick} />
                    )}
                </BtnAndFormWrapper>
            </Overlay>
        </StartUpPageWrapper>
    );
};

export default StartUpPage;