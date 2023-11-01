import React from 'react'

const FinalPage = () => {
  return (
    <div className='flex flex-col space-y-10 items-center pt-28'>
      <picture>
        <img src="https://uptaltalent.web.app/static/media/andela.1ad493b3b665cc5bcd5f.jpg" alt="" className='w-36' />
      </picture>
      <picture>
        <img src="https://uptaltalent.web.app/static/media/email.4337185bb628a02fd978.png" alt="" className='w-96' />
      </picture>
      <div className='flex items-center flex-col space-y-3'>
        <p className='text-lg font-medium text-gray-800'>You're one step closer to jumpstarting your career.</p>
        <p className='text-gray-700'>Thanks applying to Andela's talent network - someone will be in touch shortly with next steps.</p>
      </div>
    </div>
  )
}

export default FinalPage
