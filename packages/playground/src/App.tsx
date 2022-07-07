import { useCallback, useEffect, useState } from "react";
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
    return (
        <>
            <div className="fixed bottom-3 left-3 z-50 bg-opacity-50 backdrop-blur-sm backdrop-filter bg-black text-white px-4 py-3 shadow rounded-lg ">
                <div className="text-3xl">Babel Plugin Generator</div>
                将generator优雅降级的解决方案。
            </div>
            <div className="bg-gray-100 w-screen h-screen grid grid-cols-2 p-4 gap-4">
                <div className="rounded-md p-4 shadow-lg bg-white" >
                    <CodeEditor
                        noSemanticValidation
                        value={code}
                        onChange={onCodeChange}
                    />
                </div>
                <div className="rounded-md p-4 shadow-lg bg-white">
                    <CodeEditor
                        noSemanticValidation
                        value={codeAfter}
                        onChange={() => { }}
                    />
                </div>

            </div>
        </>
    );
}