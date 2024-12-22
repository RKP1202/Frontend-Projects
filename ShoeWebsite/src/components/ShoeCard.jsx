const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  const hadleCLick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }


  return (
    <div className={`border-2 rounded-xl 
      ${bigShoeImg === imgURL
        ? "border-coral-red" : "border-transparent"
      }max-sm:flex-1
      cursor-pointer
      
    `}
      onClick={hadleCLick}
    >

      <div className="flex justify-center items-center
      bg-card bg-center bg-cover
      sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail}
          alt="Shoe"
          className="object-contain "
          height={103}
          width={127}
        />
      </div>

    </div>
  )
}

export default ShoeCard