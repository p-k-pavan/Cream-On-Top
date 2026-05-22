export default function BestSelling() {
    return (
        <section className="relative overflow-hidden bg-[#f7f4e7] py-24 md:py-32">


            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                <div className="text-center mb-6">
                    <h1 className=" text-[#151e1f]">
                        Best Selling Cakes
                    </h1>

                    <p className="uppercase tracking-[0.4em] text-[#151e1f]/50 text-sm mb-4">
                        Signature Collection
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-px w-16 bg-[#151e1f]/20" />
                        <div className="w-2 h-2 rounded-full bg-[#151e1f]/40" />
                        <div className="h-px w-16 bg-[#151e1f]/20" />
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="group relative">

                        <div className="absolute inset-0 bg-black/10 rounded-[40px] translate-x-4 translate-y-4" />

                        <div className="relative bg-[#fffdf9] rounded-[40px] p-6 md:p-8 border border-black/5 shadow-2xl overflow-hidden">

                            <div className="relative overflow-hidden rounded-[30px]">
                                <img
                                    src="/cakes/white.webp"
                                    alt="White Forest Gateaux"
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-8">

                                <div className="flex items-center justify-between">
                                    <h3 className=" text-[#151e1f]">
                                        White Forest Gateaux
                                    </h3>

                                    <span className="text-sm uppercase tracking-[0.3em] text-[#151e1f]/40">
                                        Bestseller
                                    </span>
                                </div>

                                <p className="mt-6 text-[#3b4547] ">
                                    Vanilla sponge soaked in sugar syrup, layered
                                    alternatively with smooth vanilla cream and
                                    soft cherries.
                                </p>

                                <div className="flex items-center justify-between mt-8">

                                    <div className="flex items-center gap-1 text-[#151e1f] text-xl">
                                        ★ ★ ★ ★ ★
                                    </div>

                                    <button className="px-6 py-3 rounded-full border border-[#151e1f]/10 hover:bg-[#151e1f] hover:text-white transition-all duration-300">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative lg:mt-20">
                        <div className="absolute inset-0 bg-black/10 rounded-[40px] translate-x-4 translate-y-4" />

                        <div className="relative bg-[#fffdf9] rounded-[40px] p-6 md:p-8 border border-black/5 shadow-2xl overflow-hidden">
                            <div className="relative overflow-hidden rounded-[30px]">
                                <img
                                    src="/cakes/butter.webp"
                                    alt="Butterscotch Gateaux"
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <h3 className=" text-[#151e1f]">
                                        Butterscotch Gateaux
                                    </h3>

                                    <span className="text-sm uppercase tracking-[0.3em] text-[#151e1f]/40">
                                        Premium
                                    </span>
                                </div>

                                <p className="mt-6 text-[#3b4547] ">
                                    Vanilla sponge soaked in sugar syrup and layered
                                    alternatively with creamy butterscotch filling
                                    and rich butterscotch cream.
                                </p>

                                <div className="flex items-center justify-between mt-8">

                                    <div className="flex items-center gap-1 text-[#151e1f] text-xl">
                                        ★ ★ ★ ★ ★
                                    </div>

                                    <button className="px-6 py-3 rounded-full border border-[#151e1f]/10 hover:bg-[#151e1f] hover:text-white transition-all duration-300">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}