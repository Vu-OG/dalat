function HeroSection() {
    return (
        <div className= "relative w-[100vw] h-[50vw] bg-[url(./assets/img/herosection/image.webp)] bg-[50%_70%] bg-no-repeat hero-section lg:h-[calc(100vh_-_65px)] xl:h-[calc(100vh_-_80px)]" style={{ backgroundSize: '130%' }}>
            <div className="flex flex-col justify-center items-center h-full lg:items-start lg:ml-[5vw]">
                <p className="relative z-[1] text-center font-['Smooch',_cursive] font-normal text-[15vw] leading-[82.8%] items-center text-[#FFC700] lg:text-left lg:text-[11vw]"> Chào mừng đến</p>
                <h1 className="relative z-[1] text-center font-['Roboto',_sans-serif] font-black text-[18vw] leading-[76%] items-end text-white lg:text-left lg:text-[22vw] mt-[35px]">Đà Lạt</h1>
                <div className= "bottom-0 left-0 z-[0] absolute h-[80%] w-[100%] bg-[linear-gradient(356.3deg,_rgba(0,_0,_0,_0.6)_3.4%,_rgba(0,_0,_0,+0)_92.42%);] from-black/60 to-transparent">

                </div>
            </div>
        </div>
    );
}
export default HeroSection;