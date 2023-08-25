

import Logo from '../assets/Logo.png'
import Bg from '../assets/Rectangle 24.png'
import Stage from './Stage';

function Verification() {
    return (

        <>
            <span className='absolute left-0 top-0 w-full h-screen'  >
                <img src={Bg} alt="bg" />
            </span>
            <div className='min-h-screen'>
                <div className="w-[3px] h-[314px] bg-white absolute left-4" />
                <div className="w-[2px] h-[407px] bg-white absolute left-[25.5px]" />
                <div className="flex justify-between relative pl-10 pt-10">
                    <div className="space-y-8 text-white">
                        <div className="space-y-2">
                            <a href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                            <p>Süni intelekt sistemi</p>
                        </div>

                        <p className="max-w-[234px]">
                            Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən
                            edə biləcəksiniz.
                        </p>
                    </div>
                    <Stage />
                </div>
            </div>
        </>
    )
}

export default Verification