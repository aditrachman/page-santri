/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'

const stats = [
    { name: 'Jumlah PTN Join    ', stat: '71,897', change: '12%', changeType: 'increase' },
    { name: 'Jumlah Pesantren Join', stat: '58.16%', change: '2.02%', changeType: 'increase' },
    { name: 'Jumlah Organisasi Santri', stat: '24.57%', change: '4.05%', changeType: 'decrease' },
    { name: 'Jumlah User', stat: '24.57%', change: '4.05%', changeType: 'decrease' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Stat() {
    return (
        <div >
            {/* ini buat tittle */}
            <dl className="mt-5 mx-3 grid grid-cols-1 rounded-lg bg-white overflow-hidden drop-shadow-md divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">{item.name}</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                {item.stat}
                            </div>

                            <div
                                className={classNames(
                                    item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                    'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowSmUpIcon
                                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArrowSmDownIcon
                                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                        aria-hidden="true"
                                    />
                                )}

                                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                {item.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
