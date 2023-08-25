import React from 'react';
import './Buttons.scss';

interface BtnIntoBscketProps {
    textBtn: string;
}

export const BtnBlue = (props: BtnIntoBscketProps) => {
    return (
        <>
            <button className='btn'><span>{props.textBtn}</span></button>
        </>
    );
};