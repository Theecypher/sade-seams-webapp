import { MonitorPlay } from "lucide-react";

const PlayStoreButton = () => {
    return ( 
        <div className="border flex w-[120px] rounded-md items-center justify-center gap-1 border-[#808080] hover:border-white">
            <MonitorPlay className="text-[#808080] hover:text-white"  />
            
            <div className="flex flex-col">
                <p className="text-[10px] text-[#808080] hover:text-white">Download on the </p>
                <p className="text-base text-[#808080] hover:text-white">App store</p>
            </div>
        </div>
     );
}
 
export default PlayStoreButton;