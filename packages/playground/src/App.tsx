import { Dialog, Transition } from '@headlessui/react';
import { _awaiter, _generator } from 'babel-plugin-generator-runtime';
import { Fragment, useCallback, useEffect, useState } from "react";
import { Subject } from 'rxjs';
import CodeEditor from "./Editor";
import { evalInSandbox, variableToConsoleText } from './Sandbox';
import { defaultCode } from './template';
import { TemplateSelector } from './TemplateSelector';
import { babelTransform, deleteImportTransform } from './transform';

export function App() {
    const [code, setCode] = useState(defaultCode['generator']);
    const [codeAfter, setCodeAfter] = useState('');

    const [editor$] = useState(new Subject<'format' | 'darkTheme' | 'dayTheme' | 'forceUpdateCode'>());
    const [editor2$] = useState(new Subject<'format' | 'darkTheme' | 'dayTheme' | 'forceUpdateCode'>());

    const [console1, setConsole1] = useState('');
    const [console2, setConsole2] = useState('');

    const onCodeChange = useCallback((code: string) => {
        if (code) {
            const usp = new URLSearchParams(window.location.search)
            usp.set('code', encodeURIComponent(code));
            window.history.replaceState('page', '', window.location.pathname + '?' + usp.toString())
        }
        setCode(code);
    }, [])

    useEffect(() => {
        editor2$.next('forceUpdateCode');
        setCodeAfter(babelTransform(code));
    }, [code, editor2$])

    useEffect(() => {
        const usp = new URLSearchParams(window.location.search)
        const code = decodeURIComponent(usp.get('code') ?? '')
        if (code) {
            setCode(code);
        }
    }, []);

    const [isOpen, setIsOpen] = useState(true)
    const [isConsoleOpen, setIsConsoleOpen] = useState(false)

    return (
        <>
            <div className="space-y-1 fixed bottom-3 left-3 z-50 w-full touch-none pointer-events-none">
                <div className='pointer-events-auto'>
                    <TemplateSelector onSelect={(name) => {
                        editor$.next('forceUpdateCode');
                        setCode(defaultCode[name]);
                    }} />
                </div>
                <div className='bg-opacity-60 backdrop-blur-sm text-base lg:text-lg backdrop-filter bg-sky-500 text-white px-5 py-3 shadow rounded-lg w-max lg:w-1/3 '>
                    <div className="text-2xl lg:text-4xl">Babel Plugin Generator</div>
                    <div>降级generator语法的Babel插件。</div>
                </div>
            </div>
            <div className='fixed bottom-36 left-3 lg:left-auto lg:bottom-3 lg:right-3 z-10 flex space-x-2'>

                <button
                    className=" font-semibold text-white bg-green-400 hover:bg-green-500 active:bg-green-600 transition-all flex justify-center w-20 py-2 shadow-lg rounded-lg "
                    onClick={() => {
                        const GlobalEnv = {
                            Math,
                            Function,
                            Array,
                            Symbol,
                            Object,
                            Date,
                        }
                        setConsole1('');
                        setConsole2('');
                        console.log('######## Start a new session')
                        console.log('<<<<<<<< Left')
                        evalInSandbox(code, {
                            ...GlobalEnv,
                            console: {
                                log(...args: any[]) {
                                    const consoleText = args.map((arg) => variableToConsoleText(arg)).join(' ');
                                    setConsole1((c) => c + consoleText + '\n')
                                    console.log(...args);
                                }
                            }
                        })
                        console.log('>>>>>>>> Right')
                        evalInSandbox(deleteImportTransform(codeAfter), {
                            ...GlobalEnv,
                            _awaiter,
                            _generator,
                            console: {
                                log(...args: any[]) {
                                    const consoleText = args.map((arg) => variableToConsoleText(arg)).join(' ');
                                    setConsole2((c) => c + consoleText + '\n')
                                    console.log(...args);
                                }
                            }
                        })

                    }}
                >
                    Run
                </button>


                <button
                    className=" font-semibold text-white bg-sky-400 hover:bg-sky-500 active:bg-sky-600 transition-all flex justify-center w-20 py-2 shadow-lg  rounded-lg "
                    onClick={() => { setIsConsoleOpen(true) }}
                >
                    Console
                </button>
            </div>
            <div className="bg-gray-100 w-screen h-screen grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 p-4 gap-4">
                <div className="rounded-md p-4 shadow-md bg-white" >
                    <CodeEditor
                        noSemanticValidation
                        value={code}
                        onChange={onCodeChange}
                        command$={editor$}
                    />
                </div>
                <div className="rounded-md p-4 shadow-md bg-white">
                    <CodeEditor
                        noSemanticValidation
                        value={codeAfter}
                        command$={editor2$}
                        onChange={() => { }}
                    />
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => { setIsOpen(false) }}>
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
                                        className="text-2xl font-semibold leading-6 text-gray-900"
                                    >
                                        Generator Playground
                                    </Dialog.Title>
                                    <div className="mt-3 text-gray-600 space-y-4">
                                        <div>
                                            Babel Plugin Generator是一个Babel插件，用于将Generator语法降级为可被es5兼容的格式。
                                        </div>
                                        <div>
                                            <iframe src="https://ghbtns.com/github-btn.html?user=konicyQWQ&repo=babel-plugin-generator&type=star&count=true" frameBorder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
                                            <div className='mt-1'>
                                                By <a className='text-blue-600 hover:text-blue-500' target='_blank' href="https://github.com/konicyQWQ" rel="noreferrer">@konicyQWQ</a>
                                            </div>
                                            <div>
                                                Playground by <a className='text-blue-600 hover:text-blue-500' target='_blank' href="https://github.com/yar2001" rel="noreferrer">@yar2001</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            进入
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isConsoleOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsConsoleOpen(false)}>
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
                                <Dialog.Panel className="w-full max-w-lg lg:max-w-2xl transform overflow-hidden rounded-xl bg-white px-7 py-5 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h2"
                                        className="text-2xl font-semibold leading-6 text-gray-900 mb-3"
                                    >
                                        Console
                                    </Dialog.Title>
                                    <div className='grid grid-cols-2 space-x-2'>
                                        <div className='h-56 overflow-auto rounded-md bg-gray-50 px-4 py-2'>{console1.split('\n').map((text) => <p key={Math.random()}>{text}</p>)}</div>
                                        <div className='h-56 overflow-auto rounded-md bg-gray-50 px-4 py-2'>{console2.split('\n').map((text) => <p key={Math.random()}>{text}</p>)}</div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200"
                                            onClick={() => { setIsConsoleOpen(false) }}
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