import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9999">
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{
          duration: 4,
          ease: "easeIn",
        }}
      >
        {/* Background base preto */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* 🔳 Fundo base #f5f5f5 com fade out antes do final */}
        <motion.div
          className="absolute inset-0 bg-[#f5f5f5]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.8, // fade rápido
            delay: 1, // começa antes do final da animação total (4s)
            ease: "easeInOut",
          }}
        />

        {/* 🩶 Camada preta translúcida com fade out levemente depois */}
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 1, // ligeiro atraso para ficar mais natural
            ease: "easeInOut",
          }}
        />

        {/* Barras coloridas animadas da esquerda para direita */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`bar-${i}`}
            className="absolute h-full"
            style={{
              width: "30%",
              left: "-15%",
              background: [
                "#0077ff", // azul
                "#00ffff", // ciano18181B
                "#18181B",
                "#8a2be2", // roxo
                "#0077ff", // azul
                "#18181B",
                "#8a2be2", // roxo
              ][i],
            }}
            animate={{
              left: ["-10%", "120%"],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}

        <div className="z-9999">
          <p>Title</p>
        </div>

        {/* SVG em tela cheia com zoom */}
        <motion.div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src="/substract.svg"
            alt="Overlay"
            className="w-full h-full object-cover"
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              // combina zoom + pulse no mesmo SVG
              scale: [1, 1.2, 1, 180],
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: [0.76, 0, 0.5, 1],
              times: [0, 0.1, 0.2, 1],
            }}
          />
        </motion.div>

        {/* 🩶 Título inferior que some mais rápido */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 1, 0], // entra e depois some antes do overlay
            y: [0], // sobe e desce suavemente
          }}
          transition={{
            duration: 2.5, // termina antes dos 4s do overlay
            delay: 0.2, // começa logo depois das barras iniciarem
            ease: "easeOut",
            times: [0, 0.2, 0.7, 1], // controla ritmo da entrada e saída
          }}
        >
          <motion.p
            className="text-zinc-400 text-sm md:text-base mt-2 tracking-[0.15em] uppercase"
            style={{
              textShadow: "0 0 8px rgba(255,255,255,0.1)",
              letterSpacing: "0.15em",
            }}
          >
            Landing Page
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
