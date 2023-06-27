
export async function generateStaticParams(){
    const res = await fetch("https://dummyjson.com/users?limit=3",{next:{
    revalidate : 50
  }});
  const data = await res.json();
  const userIds = ['1','2','3']
  return userIds.map(userId=>{
    return {
      userId
    }
  })
}


export default async function Page({params}:{
  params : {userId : string}
}) {
  const res = await fetch(`https://dummyjson.com/carts/${params.userId}`,{next:{
    revalidate : 5
  }});
  const data = await res.json();
  const cart = data.products;
  return (
    <ul>
    {cart.map((item:any,index:any)=>{
      return(
        <li key={index}>
          <p>{item.title}</p>
        </li>
      )
    })}
    </ul>
  )
}


