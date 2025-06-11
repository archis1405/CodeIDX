import usePing from "../../hooks/apis/queries/usePing.js";


export const PingComponent = () => {
    const {isLoading , data} = usePing();

  if( isLoading ) {
    return  (
      <>
         LOADING....
      </>
    )
  }

  return (
    <>
      HELLO....{data.message}
    </>
  )
  
}