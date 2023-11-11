import '../Style.css'
import logo from '../../assets/logo.png'
import UserMenu from './UserMenu'
import { Switch } from '@/components/ui/switch'
import { Link } from 'react-router-dom'
import { useLangToggle } from '../LangToggleContext'

const Nav: React.FC = () => {
  const {toggleLang} = useLangToggle()

  return (
    <main className="fixed z-10 w-full border-b-2 border-slate-200 bg-white">
      <nav className="max mx-4 my-2 flex flex-col md:mx-8 md:flex-row lg:mx-16">
        <Link to={'/'}>
          <div className="flex items-center justify-start gap-2 max-md:w-[60%] md:gap-4">
            <div className="relative h-12 w-12 md:h-20 md:w-20">
              <img src={logo} alt="Blob" />
            </div>
            <h1 className="font-serif text-3xl font-bold uppercase max-md:text-4xl max-sm:text-2xl">
              <span className="text-orange-500 ">Jan</span>{' '}
              <span className="text-[#036C93]">sevaa</span>{' '}
            </h1> 
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <ul className="flex max-lg:hidden gap-6">
            <div className="flex items-center">
              <Switch onClick={() => toggleLang()} />
              <h1 className="text-xs font-semibold md:text-[1.1rem]">&nbsp; हिंदी</h1>
            </div>
            <Link to={'/Members'}>
              <span className="bg-white text-xs font-bold text-[#036c93] hover:text-orange-500 md:text-[1.1rem]">
                Our Members
              </span>
            </Link>
            <Link to={'/Registration'}>
              <span className="bg-white text-xs font-bold  text-orange-500 hover:text-[#036c93] md:text-[1.1rem]">
                Registration
              </span>
            </Link>
            <Link to={'/Aboutus'}>
              <span className="bg-white text-xs font-bold text-[#036c93] hover:text-orange-500 md:text-[1.1rem]">
                About us
              </span>
            </Link>
            <Link to={'/Events'}>
              <span className="bg-white text-xs font-bold  text-orange-500 hover:text-[#036c93] md:text-[1.1rem]">
                Events
              </span>
            </Link>
            <Link to={'/Donation'}>
              <span className="border rounded-lg px-4 py-2 border-blue-500 bg-transparent text-[1.1rem] font-bold text-black hover:text-[#036C93]">
                Donate
              </span>
            </Link>
          </ul>
          <div className="hidden text-3xl max-lg:block max-md:absolute max-md:bottom-5 max-md:right-4">
            <UserMenu />
          </div>
        </div>
      </nav>
    </main>
  )
}

export default Nav
