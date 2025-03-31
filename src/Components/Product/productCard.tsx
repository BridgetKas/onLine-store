
type productDetails = {
    title1:string,
    image1:string,
    text1:string,
    image2:string,
    text2:string,
    image3:string,
    text3:string,
    image4:string,
    text4:string,
}

function ProductCard(props:productDetails) {
  return (
    <div className="w-[25%] bg-red-950">
        <p>{props.title1}</p>
        <div className="flex flex-row flex-wrap  items-center p-2 gap-2 bg-yellow-500">
            <div>
                <img src={props.image1}/>
                <p>{props.text1}</p>
            </div>
            <div>
                <img src={props.image2}/>
                <p>{props.text2}</p>
            </div>
            <div>
                <img src={props.image3}/>
                <p>{props.text3}</p>
            </div>
            <div>
                <img src={props.image4}/>
                <p>{props.text4}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard