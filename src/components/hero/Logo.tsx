import { graffitiYouth } from "@/app/fonts/graffitiYouth";

export const Logo = ({ className = "" }: { className: string }) => {
  return (
    <div
      className={`${graffitiYouth.className} ${className} text-primary drop-shadow-md select-none tracking-wider`}
      style={{ WebkitTextStrokeColor: "#0d243b", WebkitTextStrokeWidth: 1 }}
    >
      Kwiasek
    </div>
  );
};
