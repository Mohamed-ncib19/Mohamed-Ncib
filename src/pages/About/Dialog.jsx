import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  
} from "@material-tailwind/react";
import DownloadIcon from "../icons/download";
import CVEnglish from "../../assets/PDF/Mohamed_Ncib_CV_English_Version.pdf"
import CVFrench from "../../assets/PDF/Mohamed_Ncib_CV_French_Version.pdf"

function DialogBox() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex h-full flex-row justify-center items-center text-center m-auto w-full">
      <Button onClick={handleOpen} variant="gradient" className="w-full h-full  flex flex-row justify-center items-center gap-2 p-4 rounded-md text-center m-auto lg:w-[30%] bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500">
        Get my Resume
        <DownloadIcon className="text-[1.5rem]" />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="text-white backdrop-blur-2xl md:w-[50%] w-full m-auto border border-gray-400 shadow-2xl shadow-indigo-500/50 text-center"
      >
        <DialogHeader>Choose CV Version :</DialogHeader>
        <DialogBody className="flex md:flex-row flex-col md:gap-4 gap-6">
        <a
        href={CVEnglish}
        className="flex flex-row justify-center items-center text-center m-auto lg:w-[30%] gap-2 w-[90%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500"
        download="Mohamed_Ncib_Resume_English"
        target="_blank"
        rel="noreferrer"
        >English Version
        <DownloadIcon className="text-[1.5rem]" />

        </a>
        <a
        href={CVFrench}
        className="flex flex-row justify-center items-center text-center m-auto gap-2 lg:w-[30%] w-[90%] p-2 rounded-xl bg-[#6947ef] text-white hover:bg-[#6947ef] font-medium hover:text-[#0F0F0F] transition-all duration-500"
        download="Mohamed_Ncib_Resume_French"
        target="_blank"
        rel="noreferrer">French Version
        <DownloadIcon className="text-[1.5rem]" />
        </a>
        </DialogBody>
      
      </Dialog>
    </div>
  );
}

export default DialogBox;
