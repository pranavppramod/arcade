import LeaderBoardButton from '../components/LeaderBoardButton';
import NextGameButton from '../components/NextGameButton';
import PlayButton from '../components/playButton';
import { motion } from 'framer-motion';

export default function LeaderBoardLayout(props) {
    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-dvh lg:h-dvh overflow-auto lg:overflow-hidden flex flex-col lg:flex-row justify-center"
        >
            <motion.div 
                layoutId="left-panel"
                className="w-full lg:w-1/2 bg-[#F8FFD7] min-h-[60dvh] lg:h-full flex flex-col justify-between py-12 lg:py-8 overflow-hidden"
            >
                <div className="flex-1 w-full flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-12 xl:px-24">
                    <motion.p layoutId="tinkerhub-label" style={{ color: `#${props.accentColor}` }} className="text-[clamp(1.5rem,3vw,40px)] font-base-neue-trial m-0">TINKERHUB SCTCE</motion.p>
                    <motion.p layoutId="game-name" style={{ color: `#${props.accentColor}` }} className="text-[clamp(5rem,12vw,137.5px)] font-base-neue-trial leading-none my-2">{props.name}</motion.p>
                    <motion.p layoutId="game-desc" style={{ color: `#${props.accentColor}99` }} className="text-[clamp(1.2rem,2.5vw,32px)] font-base-neue-trial whitespace-pre-line max-w-full leading-snug">{props.description}</motion.p>
                </div>
                <motion.div layoutId="play-btn-wrapper" className="w-full flex justify-center px-6 md:px-12 lg:px-8 xl:px-16 mt-8">
                    <PlayButton bg={props.accentColor}/>
                </motion.div>
            </motion.div>
            <motion.div 
                layoutId="right-panel"
                style={{ backgroundColor: `#${props.accentColor}` }} 
                className="w-full lg:w-1/2 min-h-[60dvh] lg:h-full flex flex-col justify-center py-12 lg:py-8 px-4 md:px-12 lg:px-8 xl:px-16 overflow-hidden"
            >
                <motion.div layoutId="game-image-bg" style={{ backgroundImage: `url('${props.bg}')` }} className="flex-1 w-full max-w-[904px] max-h-[824px] min-h-[250px] lg:min-h-0 mx-auto bg-contain bg-no-repeat bg-center flex justify-center items-center py-8">
                    <motion.div layoutId="high-score-wrapper" className="game-high-score flex flex-col justify-center items-center w-[90%] scale-[0.8] sm:scale-90 xl:scale-100 origin-center">
                        <motion.p layoutId="score-game-name" className="game-name text-[#F8FFD7] text-[clamp(4rem,7vw,137.5px)] leading-none text-center font-base-neue-trial my-0">{props.name}</motion.p>
                        <motion.button layoutId="score-button" className='w-[clamp(240px,22vw,416px)] h-[clamp(65px,6vw,91px)] bg-[#F8FFD7] rounded-xl font-base-neue-trial text-[#192F1A] text-[clamp(1.5rem,2vw,36px)] mt-4 lg:mt-8 shrink-0'>
                            HIGH SCORE: {props.highScore}
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div layoutId="utils" className="utils flex flex-row justify-center gap-4 items-center shrink-0 w-full pt-4">
                    <LeaderBoardButton />
                    <NextGameButton next={props.next} />
                </motion.div>
            </motion.div>
        </motion.main>
    )
}