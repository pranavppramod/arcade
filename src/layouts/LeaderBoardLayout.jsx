import BackButton from '../components/BackButton';
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
                // Use 'items-start' to ensure everything anchors to our left grid line
                className="relative w-full lg:w-1/2 bg-[#F8FFD7] min-h-[60dvh] lg:h-full flex flex-col items-start py-12 lg:py-8 overflow-hidden"
            >
                {/* 1. Back Button - Anchored at top-[42px] left-[59px] */}
                <motion.div
                    layoutId="back-btn-wrapper"
                    className="absolute top-[42px] left-[59px] w-full max-w-[200px] h-[clamp(40px,10vw,100px)] rounded-xl flex justify-center items-center hover:scale-[1.02] transition-transform"
                >
                    <BackButton bg={props.accentColor} />
                </motion.div>

                {/* Main Content Wrapper - Starts below the Back Button area */}
                <div className="mt-48 px-[59px] flex flex-col gap-25 w-full">

                    {/* 1. Game Name - Aligned left with Back Button */}
                    <motion.p
                        layoutId="game-name"
                        style={{ color: `#${props.accentColor}` }}
                        className="text-[clamp(8em,8vw,6rem)] font-base-neue-trial leading-none uppercase"
                    >
                        {props.name}
                    </motion.p>

                    {/* 2. Rank Section - Gap provided by 'gap-12' above */}
                    <div className="flex flex-col">
                        <motion.p
                            layoutId="player-rank-label"
                            style={{ color: `#${props.accentColor}99` }}
                            className="text-[clamp(4em,3vw,2rem)] font-base-neue-trial leading-none mb-1"
                        >
                            Your Rank
                        </motion.p>

                        {/* 3. # and 63 - Flex row with baseline alignment */}
                        <div className="flex items-start gap-0.5">
                            <motion.span
                                style={{ color: `#${props.accentColor}` }}
                                className="text-[clamp(4em,4vw,3rem)] font-base-neue-trial leading-none mt-4"
                            >
                                #
                            </motion.span>
                            <motion.span
                                style={{ color: `#${props.accentColor}` }}
                                className="text-[clamp(16em,15vw,12rem)] font-base-neue-trial leading-none"
                            >
                                63
                            </motion.span>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                layoutId="right-panel"
                style={{ backgroundColor: `#${props.accentColor}` }}
                className="w-full lg:w-1/2 min-h-[60dvh] lg:h-full flex flex-col justify-center py-12 lg:py-8 px-4 md:px-12 lg:px-8 xl:px-16 overflow-hidden"
            >
            </motion.div>
        </motion.main>
    )
}