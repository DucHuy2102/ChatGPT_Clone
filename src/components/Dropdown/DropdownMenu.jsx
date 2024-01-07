import React from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const DropdownMenu = () => {
    return (
        <div className='bg-[#202123] col-span-1 absolute bottom-12 mb-1 w-[282px] rounded-md'>
            <div className='py-7 item'>
                <FontAwesomeIcon icon={faUser} />
                <p>Setting</p>
            </div>
            <div className='py-7 item'>
                <FontAwesomeIcon icon={faGear} />
                <p>User</p>
            </div>
            <div className='py-7 item border-t'>
                <FontAwesomeIcon icon={faCircleInfo} />
                <p>More</p>
            </div>
        </div>
    );
};

export default DropdownMenu;
