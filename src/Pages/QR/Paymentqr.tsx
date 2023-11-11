import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Paymentqr = () => {
  const navigation = useNavigate()
  return (
    <div className="pt-32">
      <p className="mb-14 text-center text-xl font-semibold">
        Jansevaa Foundation Official QR Code
      </p>
      <div className=" mb-10 flex items-center justify-center ">
        <img src="/Capture.png" alt="" className=" h-80 w-64" />
      </div>
      <div className="mb-5 flex items-center justify-center">
        <Button onClick={() => navigation('/')}>Back to Home</Button>
      </div>
    </div>
  )
}

export default Paymentqr

/* Paymentqr page */
