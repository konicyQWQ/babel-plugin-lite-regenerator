import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, useEffect, useState } from "react";
import CodeEditor from "./Editor";

export function App() {
    const [code, setCode] = useState('// test');
    const [codeAfter, setCodeAfter] = useState('');
    const onCodeChange = useCallback((code: string) => {
        setCode(code);
    }, [])

    useEffect(() => {
        //TODO transform code
        setCodeAfter(code);
    }, [code])

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed bottom-3 left-3 z-50 bg-opacity-60 backdrop-blur-sm text-base lg:text-lg backdrop-filter bg-sky-500 text-white px-5 py-3 shadow rounded-lg lg:w-1/3 ">
                <div className="text-2xl lg:text-4xl">Babel Plugin Generator</div>
                将generator优雅降级的解决方案。
            </div>
            <button
                className="fixed bottom-3 right-3 z-10 font-semibold text-white bg-sky-400 hover:bg-sky-500 active:bg-sky-600 transition-all px-3 py-2 shadow-lg  rounded-lg "
                onClick={() => { openModal() }}
            >
                About
            </button>
            <div className="bg-gray-100 w-screen h-screen grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-4 gap-4">
                <div className="rounded-md p-4 shadow-md bg-white" >
                    <CodeEditor
                        noSemanticValidation
                        value={code}
                        onChange={onCodeChange}
                    />
                </div>
                <div className="rounded-md p-4 shadow-md bg-white">
                    <CodeEditor
                        noSemanticValidation
                        value={codeAfter}
                        onChange={() => { }}
                    />
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white px-7 py-5 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-lg font-semibold leading-6 text-gray-900"
                                    >
                                        About
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-gray-600">
                                            Babel Plugin Generator是一个Babel插件，用于将Generator语法降级为可被es5兼容的格式。
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200"
                                            onClick={closeModal}
                                        >
                                            关闭
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}