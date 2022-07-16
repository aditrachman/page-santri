/* This example requires Tailwind CSS v2.0+ */
const ptn = [
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UI.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UGM.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/ITB.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/IPB.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/ITS.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UB.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UPI.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNY.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNSOED.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNS.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNPAD.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNAIR.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNNES.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNJ.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/Universitas-Trunojoyo.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNILA.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNESA.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNDIP.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UNEJ.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UM.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UDAYANA.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/Unram.png',
    },


]

const ptkin = [
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-SUKA.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Sunan-Ampel.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Syarif-Hidayatullah.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Sunan-Gunung-Djati-Bandung.png',
    },
]

const pts = [
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/Tel-U.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UII.png',
    },
]

const ptk = [
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/STAN.png',
    },
    {
        imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/POLTEKESOS.png',
    },
]

export default function Kampus() {
    return (

        <div className=" px-4 py-5 border-2 border-sky-500 rounded-lg  mt-5 mx-3 sm:px-6">
            <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Negerti (PTN) </h2>
            <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
                <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {ptn.map((ptn) => (
                        <div key={ptn.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img className="w-20 h-20 mx-auto" src={ptn.imageSrc} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Keagamaan Islam Negeri (PTKIN) </h2>
            <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
                <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {ptkin.map((ptkin) => (
                        <div key={ptkin.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img className="w-20 h-20 mx-auto" src={ptkin.imageSrc} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Swasta (PTS) </h2>
            <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
                <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {pts.map((pts) => (
                        <div key={pts.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img className="w-20 h-20 mx-auto" src={pts.imageSrc} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Kedinasan (PTK) </h2>
            <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
                <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {ptk.map((ptk) => (
                        <div key={ptk.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <img className="w-20 h-20 mx-auto" src={ptk.imageSrc} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>



    )
}
