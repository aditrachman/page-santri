const people = [
    {
        name: 'Membuat & Mengembangkan Aplikasi Santri Hub',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Konsultasi & Mentoring Santri Masuk kampus',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Try Out & Bimbingan Belajar Persiapan Masuk kampus',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Update Info Kampus, Event, Beasiswa & Ilmu Pengetahuan',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Beasiswa Santri Hub',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },

]
const activityItems = [
    { id: 1, person: people[0], project: 'Mengembangkan dan maintenance, aplikasi santri hub yang memuat informasi kampus Se Indonensia, jalur masuk dan beasiswa', },
    { id: 2, person: people[1], project: 'Pendampingan santri yang belum dan/ sudah masuk PTN agar santri terhubung dengan pesantren, asrama dan organisasi di PTN', },
    { id: 3, person: people[2], project: 'Membuat Try out gratis untuk persiapan UTBK dan ujian mandiri PTN. Bimbigan belajar untuk membantu santri dalam meningkat akademik agar siap masuk kampus', },
    { id: 4, person: people[3], project: 'Kami menyediakan info kampus, event, beasiswa dan ilmu pengetahuan untuk menjawab kebutuhan santri akan sebuah informasi yang tercecer', },
    { id: 5, person: people[4], project: 'Beasiswa santri merupakan beasiswa yang diberikan kepada santri yang kurang mampun dan santri yang berprestasi baik prestasi akademik atau non akademik', },



    // More items...
]



export default function PageAbout() {
    return (
        <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Santri Hub</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Tentang Kami
                    </p>
                </div>
                <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-lg text-gray-500">
                        Platform untuk membantu santri masuk kampus favorit dalam ataupun luar negeri
                    </p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10">
                        <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                            <p>
                                <b className="text-gray-500">
                                    Visi & Misi SantriHub
                                </b>
                            </p>
                            <ul role="list">
                                <li>Membuat pembinaan dan pendampingan siswa untuk masuk kampus favorit</li>
                                <li>Membangun inkubator pemimpin muslim yang nasionalis dan religius serta peduli terhadap masyarakat</li>
                                <li>Menjadikan SantriHub sebagai wadah pembinaan, konsolidasi, dan memobilisasi pemimpin muslim kebidang-bidang strategis</li>
                                <li> Menjadi lembaga pendidikan dan riset strategis untuk mendorong kemajuan ilmu pengetahuan </li>
                            </ul>
                            <h3>Program Unggulan</h3>
                            <ul role="list" className="divide-y divide-gray-200">
                                {activityItems.map((activityItem) => (
                                    <li key={activityItem.id}>
                                        <div className="flex space-x-3">
                                            <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {activityItem.project}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Contact sales
                                </a>
                            </div>
                            <div className="rounded-md shadow ml-4">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <blockquote className="relative bg-white rounded-lg shadow-lg">
                            <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                                <img
                                    src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                                    alt="Workcation"
                                    className="h-8"
                                />
                                <div className="relative text-lg text-gray-700 font-medium mt-8">
                                    <svg
                                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative">
                                        Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                        Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin
                                        massa, lectus.
                                    </p>
                                </div>
                            </div>
                            <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                                <span className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                                    <img
                                        className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                                        src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                                        alt=""
                                    />
                                </span>
                                <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                                    <span className="text-white font-semibold sm:inline">Judith Black</span>{' '}
                                    <span className="sm:inline">CEO at Workcation</span>
                                </span>
                            </cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
