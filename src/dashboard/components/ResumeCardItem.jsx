import { Loader2Icon, MoreVertical, Notebook } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from "./../../../service/GlobalApi";
import { toast } from "sonner";

const ResumeCardItem = ({ resume, refreshData }) => {
  const navigation = useNavigate();

  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  // const onMenuClick = (url) => {
  //   navigation(url);
  // };

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.id).then(
      (resp) => {
        console.log(resp);
        toast("Resume Deleted Successfully...");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <Link to={"/dashboard/resume/" + resume.id + "/edit"}>
        <div className="p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 flex items-center justify-center h-[280px] border border-primary rounded-t-lg border-t-3 hover:scale-105 transition-all hover:shadow-md shadow-primary">
          <div className="flex items-center justify-center h-[180px]">
            {/* <Notebook /> */}
            <img src="/cv.png" alt="" />
          </div>
        </div>
      </Link>
      <div className="border p-3 flex justify-between text-white rounded-b-lg shadow-lg bg-gray-800">
        <h2 className="text-sm">{resume.attributes.title}</h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                navigation("/dashboard/resume/" + resume.id + "/edit")
              }
            >
              Edit Resume
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigation("/my-resume/" + resume.id + "/view")}
            >
              View Resume
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              Delete Resume
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default ResumeCardItem;
