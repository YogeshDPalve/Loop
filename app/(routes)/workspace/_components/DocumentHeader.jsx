import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { ButtonIcon } from '@radix-ui/react-icons'
import React from 'react'

const DocumentHeader = () => {
    return (
        <div className='flex justify-between items-center p-3 px-7  shadow-md'>
          <div></div>
          <OrganizationSwitcher />
          <div className='flex gap-5'>
              <Button size='sm'>Share</Button>
              <UserButton/>
          </div>
    </div>
  )
}

export default DocumentHeader