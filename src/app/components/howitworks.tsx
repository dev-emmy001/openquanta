import { motion } from "framer-motion";
export default function HowItWorks() {
    return (
        <div className="container mx-auto px-6 max-w-7xl">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-purple-400 text-lg font-medium mb-4 block"
            >
                Why openQuanta
            </motion.span>

            <div className="flex flex-col lg:flex-col gap-12 justify-between">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl text-white max-w-3xl tracking-tighter leading-[1.1]"
                >
                    Building Blocks For Open Science
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-xl leading-relaxed"
                >
                    We've seen quality research die in desk drawers, brilliant minds give away credit just to get published, geographic bias beat good researchers, and curators plagued by perverse incentives.
                </motion.p>
            </div>
        </div>
    )
}