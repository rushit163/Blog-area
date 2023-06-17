import Image from "next/image";
export default async function Page({params}:{
    params : {id : string}
}){
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await res.json();
    console.log(data);
    return(
<section>
  <div className="relative mx-auto max-w-screen-xl px-4 py-8">
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <Image
          alt="Les Paul"
          src={data.thumbnail}
          className="aspect-square w-full rounded-xl object-cover"
          width={300}
          height={300}
        />

      </div>

      <div className="sticky top-0">
        <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          Pre Order
        </strong>

        <div className="mt-8 flex justify-between">
          <div className="max-w-[35ch] space-y-2">
            <h1 className="text-xl font-bold sm:text-2xl">
              {data.title}
            </h1>

            <p className="text-sm">Highest Rated Product</p>

            <div className="-ms-0.5 flex">
              Ratings: {data.rating}
            </div>
          </div>

          <p className="text-lg font-bold">${data.price}</p>
        </div>

        <div className="mt-4">
          <div className="prose max-w-none">
            <p>
             {data.description}
            </p>
          </div>

          <button className="mt-2 text-sm font-medium underline">Add to Cart</button>
        </div>

       
      </div>
    </div>
  </div>
</section>
    )
}