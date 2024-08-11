import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16"> 
      {/* Left */}
      <div className="flex min-w-fit">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/384px-Facebook_icon.svg.png?20220812153731" height={40} width={40}/>
      </div>
      {/* Center */}
      {/* Right */}
    </div>
  )
}

export default Header;