import { motion } from "motion/react"


const { scrollYProgress } = useScroll()


return <motion.div style={{ scaleX: scrollYProgress }} />