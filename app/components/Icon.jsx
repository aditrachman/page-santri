/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
    { id: 1, name: 'Tentang', stat: 'Tentang Santri Hub', icon: UsersIcon, change: '122' },
    { id: 2, name: 'Info', stat: 'Info kampus', icon: MailOpenIcon, change: '5.4%' },
    { id: 3, name: 'Kampus', stat: 'jalur masuk', icon: CursorClickIcon, change: '3.2' },
    { id: 4, name: 'info', stat: 'Beasiswa', icon: CursorClickIcon, change: '3.2' },
    { id: 5, name: 'info', stat: 'Event', icon: CursorClickIcon, change: '3.2' },
    { id: 6, name: 'info', stat: 'Kalender', icon: CursorClickIcon, change: '3.2' },
    { id: 7, name: 'info', stat: 'Blog', icon: CursorClickIcon, change: '3.2' },



]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Icon() {
    return (
        <div>
            {/* ini buat tittlle icon nya */}
            <dl className="py-10 px-6 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 item-center">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-gray-100 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>
                            <div className="absolute bg-indigo-500 rounded-md p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                            <p className="text-1xl font-semibold text-gray-900">{item.stat}</p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
