"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactDialogCustomForm } from "./contact-dialog-custom-form";
import { useState } from "react";
import { ContactDialogOndemandForm } from "./contact-dialog-ondemand-form";

export const ContactDialogOndemand: React.FC = () => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);

  const handleSwitchDialog = () => {
    setSwitchDialog((prevState) => !prevState);
  };

  return (
    <Dialog onOpenChange={handleSwitchDialog} open={switchDialog}>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 text-xl rounded-md shadow gradient-effect">
          Get In Touch
        </Button>
      </DialogTrigger>
      <DialogContent
        className="p-16"
        style={{ width: "600px", maxWidth: "600px" }}
      >
        <DialogHeader>
          <DialogTitle className="mb-2">Get in Touch</DialogTitle>
          <DialogDescription>
            Please introduce the data indicated in the fields below and we will
            contact you as soon as posible
          </DialogDescription>
        </DialogHeader>
        <ContactDialogOndemandForm closeDialog={() => setSwitchDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};