import { useState,ChangeEvent } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineCloudDownload } from 'react-icons/ai'
function Stage() {
    let stages = [
        {
            id: 0,
            title: 'Təhsil',
            active: false
        },
        {
            id: 1,
            title: 'Dil bilikləri',
            active: false
        },
        {
            id: 2,
            title: 'Bacarıqlar',
            active: false
        },
        {
            id: 3,
            title: 'İdman',
            active: false
        },
        {
            id: 4,
            title: 'İş təcrübəsi',
            active: false
        },
        {
            id: 5,
            title: 'Program ',
            active: false
        },
        {
            id: 6,
            title: 'Verifikasiya',
            active: true
        },
    ]

    const [documents, setDocuments] = useState([

        {
            id: 0,
            title: 'Şəxsiyyət vəsiqəsi'
        },
        {
            id: 1,
            title: '9-cu sinif atestatı'
        },
        {
            id: 2,
            title: '11-ci sinif atestatı'
        },
        {
            id: 3,
            title: 'Tələbə bileti'
        },
        {
            id: 4,
            title: '[Universitetin adı]-[ixtisasın adı] üzrə Bakalavr Diplomu'
        },
        {
            id: 5,
            title: '[Universitetin adı]-[ixtisasın adı] üzrə Magistr Diplomu'
        },
    ])  

    const [file,setFile]=useState<File>()
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };
    return (
        <div className='pr-10 my-8 flex w-[68rem]'>
            <ul className='w-[26%] mt-4'>
                {
                    stages.map((stage, index) => {
                        return <li key={index} className={`w-[90%]  z-5 relative rounded-3xl  py-5 my-3 px-4 flex items-center h-[10px] shadow max-w-xl ${stage.active ? 'bg-[#103557] w-full -left-8 justify-center  text-white' : 'bg-[#F4F4F4]'}`}>
                            <a href="/" className='w-full'>

                                {stage.active &&
                                    <span className='pl-4'>
                                        {`${index + 1}.  `}

                                    </span>
                                }
                                <span className='pl-8'>{stage.title}</span>
                            </a>
                        </li>
                    })
                }
            </ul>


            <div className='w-[74%] relative -left-[7rem] z-10 '>
                <div className='w-full rounded-lg bg-white p-4'>
                    <h1 className='text-center m-5 text-[1.125rem] text-[#038477] '>
                        Verifikasiya Mərhələsi
                    </h1>

                    <div className='mt-4'>

                        <p>Aşağıdaki sənədləri yükləyin:</p>

                        <ul>
                            {
                                documents.map((document, index) => {
                                    return (
                                        <li key={document.id} className='w-full px-5 py-3 bg-[#F8F8F8] rounded-3xl my-3 flex justify-between items-center'>
                                            <span>{index + 1}. {document.title}</span>
                                            <div className='text-[.8rem] '>{file && `${file.name}`}</div>
                                            <a href="/" className='text-[#038477] text-2xl relative'>
                                                <input type="file"  onChange={handleFileChange}  className='w-[3rem] absolute right-0 top-0 z-10 cursor-pointer opacity-0 text-[1px]'/>
                                                <AiOutlineCloudDownload className='absolute right-0 top-0 z-1'/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='w-full flex justify-between my-4'>
                    <a href="/" className='flex py-3 px-12 gap-5 items-center justify-center text-[#038477] rounded-3xl border border-[#038477]'>
                        <BsArrowLeft />
                        <span>Geri</span>
                    </a>
                    <a href="/" className="text-white bg-gradient-to-b from-teal-900 to-cyan-400 p-3 px-12 flex items-center justify-center rounded-3xl">

                        Yekunlaşdır
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Stage