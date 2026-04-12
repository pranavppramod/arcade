export default function LeaderBoardButton() {
    return (
        <button className="bg-[#F8FFD7] w-[clamp(90px,20vw,261px)] aspect-261/225 rounded-xl flex justify-center items-center hover:scale-[1.02] transition-transform shrink-0">
            <img src="/leaderboard.png" className="w-[48%] h-auto max-w-[126px]" alt="Leaderboard"/>
        </button>
    )
}