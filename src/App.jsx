import './App.css';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DropdownMenu from './components/Dropdown/DropdownMenu';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='grid grid-cols-5 h-[100vh]'>
            {/* sidebar */}
            <div className='bg-black col-span-1 text-white flex flex-col h-full justify-between px-3'>
                {/* top */}
                <div className='flex mt-2 text-xl py-2 pl-0 cursor-pointer hover:bg-[#202123] rounded-md'>
                    {/* img & nameApp */}
                    <div className='flex items-center pl-5'>
                        <img
                            src='https://freelogopng.com/images/all_img/1681038887chatgpt-logo%20black-and-white.png'
                            alt=''
                            className='w-[30px] h-auto rounded-full'
                        />
                        <p className='ml-3'>New chat</p>
                    </div>
                    {/* icon new chat */}
                    <div className='flex items-center ml-auto mr-5'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </div>

                {/* bottom */}
                <div
                    className='flex justify-center mb-2 text-xl py-2 cursor-pointer hover:bg-[#202123] rounded-md'
                    onClick={() => setClicked(!clicked)}
                >
                    <div className='flex justify-start items-center relative w-full'>
                        <img
                            src='https://media.bongda.com.vn/files/hai.phan/2023/12/12/ds-2208.jpg'
                            alt=''
                            className='w-[40px] h-[40px] rounded-full cover ml-[10px]'
                        />
                        <p className='ml-3'>Nguyen Duc Huy</p>
                        {clicked && <DropdownMenu />}
                    </div>
                </div>
            </div>

            {/* main content */}
            <div className='bg-[#343541] col-span-4 relative'>
                <div className='top_content'></div>
                <div></div>

                {/* input chat */}
                <div className='input_chat flex flex-col justify-center items-center w-full absolute bottom-0 mb-2'>
                    <div className='w-full flex justify-center items-center relative'>
                        <input
                            type='text'
                            placeholder='Message ChatGPT ...'
                            className='w-[800px] px-4 py-4 rounded-lg bg-[#343541] border border-neutral-600 text-white'
                        />
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className='iconArrowUp absolute right-[230px] px-2 py-2 text-xl bg-[#494a54] rounded-lg hover:bg-[#2f2f37]'
                        />
                    </div>
                    <p className='text-sm text-white mt-2'>
                        ChatGPT can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
