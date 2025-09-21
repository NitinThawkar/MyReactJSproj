import { Suspense, use } from "react";

// FetchQuots must be a synchronous function component when using the experimental use() hook
function FetchQuots() {
  
  const quotsInfo = use(
    fetch("https://dummyjson.com/quotes").then((res) => res.json())
  );

  return JSON.stringify(quotsInfo)

  // return (
  //   <div>
  //     <h3>Quotes List</h3>
  //     {quotsInfo?.quotes?.slice(0, 5).map((item) => (
  //       <p key={item.id}>
  //         {item.id} - {item.quote} - {item.author}
  //       </p>
  //     ))}
  //   </div>
  // );
}

function UseHookTest() {
  return (
    <>
      <h2>UseHookTest</h2>
      <Suspense fallback={<h3>Loading Quotes...</h3>}>
        <FetchQuots />
      </Suspense>
    </>
  );
}

export default UseHookTest;