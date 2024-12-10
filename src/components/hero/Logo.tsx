import { graffitiYouth } from "@/app/layout";

export const Logo = ({ className = "" }: { className: string }) => {
  return (
    <div
      className={`${graffitiYouth.className} ${className} text-primary drop-shadow-md select-none`}
    >
      Kwiasek
    </div>
  );
};
