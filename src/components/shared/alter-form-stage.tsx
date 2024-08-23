import { useSignUpContextHook } from '@/hooks/useSignUp';
import React from 'react'
import SignUpPhase1 from './sign-up-p1';
import SignUpPhase2 from './sign-up-p2';
import SignUpPhase3 from './sign-up-p3';
import SignUpPhase4 from './sign-up-p4';
import SignUpPhase5 from './sign-up-p5';

type Props = {}

const AlterFormStage = (props: Props) => {
    const { step } = useSignUpContextHook();
    
    switch (step) {
        case 0:
            return <SignUpPhase1 />

        case 1:
            return <SignUpPhase2 />

        case 2: 
            return <SignUpPhase5 />

        case 3:
            return <SignUpPhase3 /> 

        case 4:
            return <SignUpPhase4 />
    }
}

export default AlterFormStage