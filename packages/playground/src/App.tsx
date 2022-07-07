import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useCallback, useEffect, useState } from "react";
import { Subject } from 'rxjs';
import CodeEditor from "./Editor";
import { babelTransform } from './transform'
import { TemplateSelector } from './TemplateSelector';

export const defaultCode: Record<string, string> = {
    normal: `// test
function* foo(){
    console.log('Hello generator!');
}`,
    normal2: `// test
function* foo(){
    console.log('Hello generator2!');
}`,
    normal3: `// test
function* foo(){
    console.log('Hello generator3!');
}`,
    normal4: `// test
function* foo(){
    console.log('Hello generator4!');
}`,

}

export function App() {
    const [code, setCode] = useState(defaultCode['normal']);
    const [codeAfter, setCodeAfter] = useState('');

    const [editor$]=useState(new Subject<'format' | 'darkTheme' | 'dayTheme' | 'forceUpdateCode'>());
    const [editor2$]=useState(new Subject<'format' | 'darkTheme' | 'dayTheme' | 'forceUpdateCode'>());

    const onCodeChange = useCallback((code: string) => {
        setCode(code);
    }, [])

    useEffect(() => {
        editor2$.next('forceUpdateCode');
        setCodeAfter(babelTransform(code));
    }, [code, editor2$])

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="space-y-1 fixed bottom-3 left-3 z-50 w-full touch-none pointer-events-none">
                <div className='pointer-events-auto'>
                    <TemplateSelector onSelect={(name) => {
                        editor$.next('forceUpdateCode');
                        setCode(defaultCode[name]);
                    }} />
                </div>
                <div className='bg-opacity-60 backdrop-blur-sm text-base lg:text-lg backdrop-filter bg-sky-500 text-white px-5 py-3 shadow rounded-lg lg:w-1/3 '>
                    <div className="text-2xl lg:text-4xl">Babel Plugin Generator</div>
                    <div>降级generator语法的Babel插件。</div>
                </div>
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
                                            onClick={closeModal}
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
        </>
    );
}