import React from "react";

export default function ToastPopup() {
  const statuses = ["success", "error", "warning", "info"];
  const toastMessagePopup = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  };
}
