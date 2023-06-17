export const dynamic = 'force-static'
import Image from "next/image";
export default async function Home() {
  const result1 = await fetch("https://dummyjson.com/products/2");
  const product1 = await result1.json()
  console.log(result1);
  const result2 = await fetch("https://dummyjson.com/products/3")
  const product2 = await result2.json()
  return (
    <div>
      <section>
        {product1.images[0] && product2.images[0]?
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Products</h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                    rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="/products"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <Image
                      src={product1.images[0]}
                      alt=""
                      width={350}
                      height={350}
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        {product1.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">${product1.price}</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="block group">
                    <Image
                      src={product2.images[0]}
                      alt=""
    
                      width={300}
                      height={300}
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        {product2.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">${product2.price}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        :<div>Loading....</div>}
      </section>
    </div>
  )
}
