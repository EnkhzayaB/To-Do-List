import { useState } from "react";
import UserButton from "./UserButton";

function Main() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // const [data, setData] = useState("");
  return (
    <div className="flex bg-[#f3f4f6] h-screen w-screen items-center flex-col gap-5">
      {/* <div className="flex justify-center">
        <p className="text-2xl font-bold">User Management</p>
      </div> */}
      <div className="w-[480px] size-fit bg-white mt-[60px] shadow-md rounded-xl py-[24px] px-[16px] flex flex-col">
        <div className="flex gap-[6px] flex-col">
          <div className="flex flex-col">
            <p className="font-semibold">Name</p>
            <input
              className="h-[40px] border w-full border-[#e4e4e7] rounded-md pl-4"
              type="text"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Phone</p>
            <input
              className="h-[40px] border w-full border-[#e4e4e7] rounded-md pl-4"
              type="number"
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Email</p>
            <input
              className="h-[40px] border w-full border-[#e4e4e7] rounded-md pl-4"
              type="text"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* user data start */}
      <div className="flex bg-whithe w-[480px] size-fit bg-white mt-[60px] shadow-md rounded-xl py-[24px] px-[16px] gap-2 relative">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{formData.name}</p>
          <div className="flex items-center gap-2">
            <img
              src="/images/user-manage-img/call-icon.png"
              alt=""
              className="w-[12px] h-[12px]"
            />
            <p className="text-gray-700">{formData.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/user-manage-img/email-icon.png"
              alt=""
              className="w-[12px] h-[12px]"
            />
            <p className="text-gray-700">{formData.email}</p>
          </div>
        </div>
        <div className="absolute right-[20px] top-12">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Main;
