import React, { useState } from "react";
import { Dialog, Transition, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";

function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeDrawer() {
    setIsOpen(false);
  }

  function openDrawer() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openDrawer}
        className="lg:hidden p-2 text-[#657a99] hover:text-brandPrimary focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeDrawer}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-50"
              aria-hidden="true"
            />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-y-0 left-0 w-[235px] bg-white shadow-lg z-20">
              <DialogPanel className="h-full">
                <div className="p-4">
                  <button
                    onClick={closeDrawer}
                    className="absolute top-2 right-2 p-2 text-[#657a99] hover:text-brandPrimary focus:outline-none"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <ul className="flex flex-col gap-4">{children}</ul>
                </div>
              </DialogPanel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default Drawer;
