import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

const SwitchHeart = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div className='heart-switch'>
            <HeartSwitch
                size="sm"
                inactiveTrackFillColor="#ffffff"
                inactiveTrackStrokeColor="#7FC9F0"
                activeTrackFillColor="#7FC9F0"
                activeTrackStrokeColor="#446B80"
                inactiveThumbColor="#ecfeff"
                activeThumbColor="#ecfeff"
                checked={checked}
                onChange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
        </div>
    );
};

export default SwitchHeart;