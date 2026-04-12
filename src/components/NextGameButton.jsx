export default function NextGameButton({ next }) {
    const handleNext = () => {
        window.location.href = next;
    }
    return (
        <button onClick={handleNext} className="bg-[#F8FFD7] flex-1 max-w-[612px] h-[clamp(90px,18vw,225px)] rounded-xl flex justify-center items-center hover:scale-[1.02] transition-transform min-w-[200px]">
            <p className="text-[#192F1A] text-[clamp(1.5rem,3vw,36px)] font-base-neue-trial m-0 leading-none">NEXT GAME</p>
        </button>
    )
}