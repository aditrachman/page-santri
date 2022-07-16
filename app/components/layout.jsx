import Icon from '~/components/Icon'
import Form from '~/components/joinform'
import Kampus from '~/components/kampus'
import Stat from '~/components/stat'
import Banner from '~/components/Banner'
import Bloginspirasi from '~/components/Blog1'
import Blog from '~/components/Blog2'

import Footer from '~/components/Footer'



import Nav from '~/components/Nav'
import Hero from '~/components/hero'
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Switch, Transition } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout2() {
    const [availableToHire, setAvailableToHire] = useState(true)
    const [privateAccount, setPrivateAccount] = useState(false)
    const [allowCommenting, setAllowCommenting] = useState(true)
    const [allowMentions, setAllowMentions] = useState(true)

    return (
        <div>
            <Nav />
            <Disclosure as="div" className="relative bg-sky-700 pb-32 overflow-hidden">
                {({ open }) => (
                    <>


                        <header className="relative py-6">
                        </header>
                    </>
                )}
            </Disclosure>

            <main className="relative -mt-32">
                <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="divide-y divide-gray-200">
                            <aside className="py-6 lg:col-span-3">
                                <Hero />
                                <Icon />
                                <Form />
                                <Kampus />
                                <Stat />
                                <Banner />
                                <Bloginspirasi />
                                <Blog />
                            </aside>


                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
