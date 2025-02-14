import { toast } from "react-toastify";

export const toastSuccess = (message: string) =>
  toast.success(message, { className: "bg-green-100" });

export const toastInfo = (message: string) =>
  toast.info(message, { className: "bg-blue-100" });

export const toastError = (message: string) =>
  toast.error(message, { className: "bg-red-100" });
