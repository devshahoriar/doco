import consImg from '../../../assets/img/cons.jpg'

const UnderContraction = () => {
  // h-[calc(100vh-10px)] 
  return (
    <div className="h-[calc(100vh-100px)] w-[calc(100vw-100px)] overflow-hidden">
      <img src={consImg} className="object-cover h-full w-full" alt="" />
    </div>
  )
}

export default UnderContraction
