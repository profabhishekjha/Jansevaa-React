import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import MenuItem from './MenuItem'
import { Switch } from '@/components/ui/switch'
import { useNavigate } from 'react-router-dom'
import { useLangToggle } from '../LangToggleContext'

const UserMenu = () => {
  const { toggleLang } = useLangToggle()
  const router = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <div className="mr-2 flex items-center">
          <Switch onClick={() => toggleLang()} />
          <h1 className="text-sm font-semibold md:text-[1.1rem]">&nbsp; हिंदी</h1>
        </div>
        <div onClick={toggleOpen} className="">
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            -right-4
            top-12
            w-[150px]
            overflow-hidden 
            rounded-b-xl 
            bg-white 
            text-sm 
            shadow-md
          ">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem
                label="Donate"
                onClick={() => {
                  router('/Donation')
                  setIsOpen(false)
                }}
              />
              <MenuItem
                label="Our Members"
                onClick={() => {
                  router('/members')
                  setIsOpen(false)
                }}
              />
              <MenuItem
                label="Registration"
                onClick={() => {
                  router('/registration')
                  setIsOpen(false)
                }}
              />
              <MenuItem
                label="Events"
                onClick={() => {
                  router('/Events')
                  setIsOpen(false)
                }}
              />
              <MenuItem
                label="About us"
                onClick={() => {
                  router('/Aboutus')
                  setIsOpen(false)
                }}
              />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
