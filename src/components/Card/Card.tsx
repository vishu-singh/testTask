type CardProps = {
  showButton: boolean;
  data:any
};

const Card = ({showButton,data}:CardProps) => {
 

  return (
    <div className="cl cl-yellow">
      <div className="image-box">
          <img className="thumb" src={data.image} alt="" />
      </div>
      <div className="text-container">
        <h6>{data.title}</h6>
        <p>{data.description}</p>
        {showButton&&<button className="read-more shadow-lg mt-4">Read more <i className="fas fa-angle-right ml-4"></i></button>}
        </div>
    </div>
  );
};

export default Card;
