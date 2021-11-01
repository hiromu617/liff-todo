import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NewTodoForm } from "./NewTodoForm";

export type NewTodoModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewTodoModal: React.VFC<NewTodoModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const close = () => {
    setIsOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full  max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                New Todo
              </Dialog.Title>
              <NewTodoForm close={close}/>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
