import { SiOpenai } from "react-icons/si";
 
export default function OpenAIIcon() {
  return (
    <div className="relative">
       <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="relative p-6 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-neon-cyan/30 animate-float">
          <SiOpenai size={60} />
        </div>
      </div>
    </div>
  );
}
