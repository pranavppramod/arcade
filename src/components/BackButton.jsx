export default function BackButton({ bg }) {
    return (
        <button style={{ backgroundColor: `#${bg}` }} className="w-full max-w-[180px] min-h-[5px] h-[clamp(40px,10vw,100px)] rounded-xl flex justify-center items-center hover:scale-[1.02] transition-transform">
            <p className="text-[#F8FFD7] text-[clamp(1rem,5vw,2.5rem)] font-base-neue-trial m-0 leading-none"> Home</p>
        </button>
    )
}