import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { defaultCode } from './App'

export function TemplateSelector({ onSelect }: { onSelect(name: string): void }
) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-40 backdrop-blur-sm backdrop-filter px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50 active:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Select template
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 bottom-11 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {Object.keys(defaultCode).map((name) =>
                            <Menu.Item key={name}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-sky-400 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={()=>{
                                            onSelect(name);
                                        }}
                                    >
                                        {name}
                                    </button>
                                )}
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}