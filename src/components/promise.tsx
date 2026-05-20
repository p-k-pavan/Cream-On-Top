export default function Promise() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

    {/* Background Shape */}
    <div className="absolute right-0 top-0 h-100 w-100 rounded-full " />

    <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center">

            <span className="text-sm text-[#575752] uppercase tracking-[4px] ">
                Why Choose Us
            </span>

            <h1 className="mt-3 text-[#181816]">
                Crafted With Love & Perfection
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[#363633]">
                Every cake is freshly baked using premium ingredients,
                artistic designs, and a passion for making your celebrations unforgettable.
            </p>

        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">

      
            <div className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-4xl">
                    🎂
                </div>

                <h3 className="text-lg font-bold uppercase text-[#181816]">
                    Custom Designs
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                    Unique cake creations designed specially for your moments.
                </p>

            </div>

            {/* Card 3 */}
            <div className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-4xl">
                    🎁
                </div>

                <h3 className="text-lg font-bold uppercase text-[#181816]">
                    Premium Quality
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                    Made with rich flavors, premium ingredients, and expert craftsmanship.
                </p>

            </div>

            {/* Card 4 */}
            <div className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-4xl">
                    🍰
                </div>

                <h3 className="text-lg font-bold uppercase text-[#181816]">
                    Freshly Baked
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                    Soft, delicious cakes baked fresh daily with love and care.
                </p>

            </div>

             <div className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-4xl">
                    🚚
                </div>

                <h3 className="text-lg font-bold uppercase text-[#181816]">
                    Reliable Delivery
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                    Fresh cakes delivered safely and on time for every celebration.
                </p>

            </div>

        </div>
    </div>
</section>
  );
}