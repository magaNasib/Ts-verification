import {BiLogoFacebook,BiLogoInstagramAlt,BiLogoLinkedin} from 'react-icons/bi'
import Logo from '../assets/Logo2.png'
const Footer = () => {
  const links = [
    {
      text: "Home",
      path: "/#home",
    },
    {
      text: "About Product",
      path: "/#aboutproduct",
    },
    {
      text: "About Us",
      path: "/#aboutus",
    },
    {
      text: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <footer className="border-t border-t-[#CEE7E4] bg-[#EAF5F3] bg-opacity-50 absolute z-10 w-full left-0 px-[220px] py-10">
      <div className="flex items-center gap-6">
        <div>
          <div className="w-[153px]">
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-center text-sm whitespace-nowrap text-[#767676]">
            Suni intelekt sistemi
          </p>
        </div>

        <div className="h-16 w-0.5 bg-[#E0EAEA]"></div>

        <div className=" w-full h-full space-y-3.5">
          <ul className="flex gap-5">
            {links.map(({ text, path }, index) => (
              <li key={index}>
                <a className="text-[#9DA2AA] font-medium" href={path}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[#9DA2AA] font-medium font-manrope text-sm">
            Copyright © 2023 Privacy and policy &#x2022; Talent Score
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3.5">
            <BiLogoFacebook
              icon="fa6-brands:facebook-f"
              className="w-6 h-6  text-[#9DA2AA] cursor-pointer"
            />
            <BiLogoInstagramAlt
              icon="ant-design:instagram-filled"
              className="w-6 h-6  text-[#9DA2AA] cursor-pointer"
            />
            <BiLogoLinkedin
              icon="fa6-brands:linkedin-in"
              className="w-6 h-6 text-[#9DA2AA] cursor-pointer"
            />
          </div>
          <p className="text-[#9DA2AA] font-medium font-manrope whitespace-nowrap">
            Support: example@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


