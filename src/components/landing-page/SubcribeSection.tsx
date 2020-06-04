import React, { FC } from 'react';
import { TextHeader, TextPargraph } from '../common/Text';
import InputWrapper from '../common/InputWrapper';
import { PrimaryButton } from '../common/Button';

const SubscribeSection: FC = () => {
    return(
        <div className="subscribe-section">
            <TextHeader content="25% OFF on your first order by subscribing to our newsletters!"/>
            <TextPargraph content="Don't miss out on our great offers & most of our service that will be lunching soon"/>

            <div className="input-div">
                <InputWrapper>
                    <TextHeader content="Full Name"/>
                    <input placeholder="What’s your name?"/>
                </InputWrapper>
                <InputWrapper className="left-20">
                    <TextHeader content="City"/>
                    <input placeholder="Select Location"/>
                </InputWrapper>
            </div>
            <InputWrapper className="width-long">
                    <TextHeader content="Email Address"/>
                    <input placeholder="What’s your email address?"/>
            </InputWrapper>
            <PrimaryButton label="Subscribe"/>
        </div>
    )
};

export default SubscribeSection;
