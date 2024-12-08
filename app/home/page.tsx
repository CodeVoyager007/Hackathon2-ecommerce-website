import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
<section className="flex items-center justify-between p-8 bg-[#FBEBB5]">
    <div className="flex flex-col ml-16" style={{ width: '440px', gap: '10px' }}>
        <h1 className="text-5xl font-bold uppercase text-black">Rocket Single</h1>
        <h2 className="text-3xl font-medium uppercase text-black">Seater</h2>
        <Link 
            href="/shop" 
            className="mt-4 inline-block text-black py-3 px-12 text-lg font-semibold underline uppercase"
        >
            Shop Now
        </Link>
    </div>
    <div className="flex-shrink-0">
        <Image src="/hero.png" alt="Rocket Single Seater" width={500} height={500} className="object-cover" />
    </div>
</section>

            {/* Second Section */}
            <section className="flex justify-center p-8" style={{ background: '#FAF4F4' }}>
                <div className="flex flex-col items-center mx-4">
                    <Image src="/side-table.png" alt="Side Table" width={500} height={500} className="object-cover" />
                    <p className="mt-2 text-3xl">Side Table</p>
                    <Link href="/view-more" className="mt-2 bg-white text-black py-2 px-4 rounded">
                        View More
                    </Link>
                </div>
                <div className="flex flex-col items-center mx-4">
                    <Image src="/sofa.png" alt="Another Table" width={500} height={500} className="object-cover" />
                    <p className="mt-2 text-3xl">Another Table</p>
                    <Link href="/view-more" className="mt-2 bg-white text-black py-2 px-4 rounded">
                        View More
                    </Link>
                </div>
            </section>

            {/* New Section: Top Picks For You */}
            <section className="flex flex-col items-center p-8" style={{ background: '#FFFFFF' }}>
                <h2 className="text-3xl font-bold text-center">Top Picks For You</h2>
                <p className="mt-2 text-center">Find a bright idea to suit your taste with our great selection of suspension floor and table lights.</p>
                <div className="flex justify-center mt-14 text-background: #9F9F9F;
">
                    <div className="flex flex-col items-center mx-2">
                        <Image src="/1.png" alt="Light 1" width={200} height={200} className="object-cover" />
                        <p className="mt-2 text-center">trenton modular sofe_3</p>
                        <p className="text-center">RS.25,000.00</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <Image src="/2.png" alt="Light 2" width={200} height={200} className="object-cover" />
                        <p className="mt-2 text-center">granote dinning table with dinning chair</p>
                        <p className="text-center">RS.25,000.00</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <Image src="/3.png" alt="Light 3" width={200} height={200} className="object-cover" />
                        <p className="mt-2 text-center">Outdoor bar table and stool</p>
                        <p className="text-center">RS.25,000.00</p>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <Image src="/4.png" alt="Light 4" width={200} height={200} className="object-cover" />
                        <p className="mt-2 text-center">Plain console with teak mirror</p>
                        <p className="text-center">RS.25,000.00</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Link href="/view-more-lights" className="text-center text-black underline">
                        View More
                    </Link>
                </div>
            </section>
            

            {/* New Section: New Arrivals */}
            <section className="flex items-center justify-between px-8 py-16" style={{ background: '#FFF9E5' }}>
    <div className="flex-shrink-0">
        <Image src="/asgard.png" alt="New Arrival" width={900} height={799} className="object-cover" />
    </div>
    <div className="flex flex-col items-center ml-8">
        <h2 className="text-lg font-medium text-gray-500">New Arrivals</h2>
        <h1 className="mt-2 text-5xl font-extrabold text-center">Asgaard sofa</h1>
        <Link
            href="/order-now"
            className="mt-6 border border-black py-3 px-10 text-black hover:bg-black hover:text-white"
        >
            Order Now
        </Link>
    </div>
</section>
{/* blog section */}
<section className="py-16 px-8 bg-white">
    <h2 className="text-4xl font-semibold text-center mb-8">Our Blogs</h2>
    <p className="text-lg text-center mb-12">Find a bright ideal to suit your taste with our great selection</p>
    
    <div className="flex justify-center gap-8">
        {/* Blog 1 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image 
                    src="/blog1.png" 
                    alt="Blog Image 1" 
                    width={320} 
                    height={240} 
                    className="w-full h-60 object-cover rounded-lg"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold hover:underline mb-2 block">
                    Read More
                </Link>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image 
                    src="/blog2.png" 
                    alt="Blog Image 2" 
                    width={320} 
                    height={240} 
                    className="w-full h-60 object-cover rounded-lg"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold hover:underline mb-2 block">
                    Read More
                </Link>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image 
                    src="/blog3.png" 
                    alt="Blog Image 3" 
                    width={320} 
                    height={240} 
                    className="w-full h-60 object-cover rounded-lg"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold hover:underline mb-2 block">
                    Read More
                </Link>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>
    </div>

    {/* View All Link */}
    <div className="mt-12 text-center">
        <Link 
            href="/blogs" 
            className="text-lg font-semibold text-black hover:underline"
        >
            View All
        </Link>
    </div>
</section>

<section className="relative w-full h-[450px]">
        {/* Background Image */}
        <Image
          src="/instagram.png"
          alt="insta"
          layout="fill" 
          objectFit="cover" 
          className="object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-7 px-[50px] py-[20px] rounded-full shadow-2xl bg-[#FAFAFA]  text-black font-semibold">
            Follow Us
          </button>
        </div>
      </section>
        </div>
    );
};

export default HomePage;
