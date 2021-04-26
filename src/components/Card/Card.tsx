const Card = () => {
  return (
    <div className="cl cl-yellow">
      <div className="image-box">
          <img className="thumb" src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
      </div>
      <div className="text-container">
        <h6>Title 05</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button className="read-more">Read More <i className="fas fa-angle-right"></i></button>
        </div>
    </div>
  );
};

export default Card;
