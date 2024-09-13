import React, { Dispatch, SetStateAction, ChangeEvent, useState } from 'react';

import { Form, CloseFormBtn, EmailInput, ErrorMessage, SubmitBtn } from './styled';

interface StartUpPageFormProps {
    setFirstStepClick: Dispatch<SetStateAction<boolean>>;
}

const StartUpPageForm: React.FC<StartUpPageFormProps> = ({ setFirstStepClick }) => {
    const [emailValue, setEmailValue] = useState<string>('');
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value.trim());
        setInvalidEmail(false);
    };

    const handleEmailSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const regExp = /[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;

        if (emailValue == '') {
            return;
        } else if (!emailValue.match(regExp)) {
            setInvalidEmail(true);
            return;
        }

        console.log(emailValue);
    };

    return (
        <Form onSubmit={handleEmailSubmit}>
            <CloseFormBtn onClick={() => setFirstStepClick(false)} type="button">
                X
            </CloseFormBtn>

            <div style={{ position: 'relative', width: '100%' }}>
                <EmailInput
                    type="text"
                    value={emailValue}
                    onChange={handleInputChange}
                    placeholder="john.doe@gmail.com"
                />
                {invalidEmail && <ErrorMessage>Invalid email!</ErrorMessage>}
            </div>

            <SubmitBtn type="submit" />
        </Form>
    );
};

export default StartUpPageForm;