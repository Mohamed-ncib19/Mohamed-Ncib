import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import GraduationImage from "../../assets/graduation.png";
import ReactWhatsapp from "react-whatsapp";

const CoreModal = ({ buttonContent }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleCongratsClick = () => {
    handleOpen();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="purple"
        className="text-purple-300 font-bold px-20 py-4 rounded-md bg-purple-200 bg-opacity-30 hover:bg-opacity-50 hover:text-white"
      >
        {buttonContent}
      </Button>
      
      <Dialog
        open={open}
        onClose={handleOpen}
        className="bg-purple-200 bg-opacity-25 backdrop-blur-lg w-screen max-w-screen-sm m-auto rounded-md mt-5"
      >
        <DialogBody className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img
              src={GraduationImage}
              alt="Graduated"
              className="w-40 h-auto"
            />
            <h1 className="text-white text-2xl font-extrabold tracking-wider mt-4 mb-2">
              I`m Officially Graduated
            </h1>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center md:justify-end gap-5">
          
          <Button
              onClick={handleCongratsClick}
              color="purple"
              className="px-10 py-2 rounded-md bg-gray-100 bg-opacity-40 hover:bg-opacity-50"
            >
              Close
            </Button>
            <ReactWhatsapp number="21655518492" message="Congrats">
            <Button
              onClick={handleCongratsClick}
              color="purple"
              className="px-10 py-2 rounded-md bg-purple-400 bg-opacity-40 hover:bg-opacity-50"
            >
              Congrats
            </Button>
            
          </ReactWhatsapp>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CoreModal;
