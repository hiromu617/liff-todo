import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Item } from "../types/item.type";

export type TodoDetailModalProps = {
  TodoItem: Item;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TodoDetailModal: React.VFC<TodoDetailModalProps> = ({
  TodoItem,
  isOpen,
  setIsOpen,
}) => {
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
                {TodoItem.title}
              </Dialog.Title>
              <Dialog.Description className="mt-2">
                <p className="text-sm text-gray-500">{TodoItem.description}</p>
              </Dialog.Description>
              <div className="mt-4 flex justify-end items-center gap-5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
