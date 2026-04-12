export default function PlayButton({ bg }) {
    return (
        <button style={{ backgroundColor: `#${bg}` }} className="w-full max-w-[697px] min-h-[120px] h-[clamp(120px,22vw,308px)] rounded-xl flex justify-center items-center hover:scale-[1.02] transition-transform">
            <p className="text-[#F8FFD7] text-[clamp(4rem,10vw,218.11px)] font-base-neue-trial m-0 leading-none">PLAY</p>
        </button>
    )
}