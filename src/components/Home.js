function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMj-Iv-jLcaBcE8LxpxGxBbigj_gmomhIkcJnQswFlvSDUML-S6w4cSAOt7NC4rSCBad4&usqp=CAU" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaXuwtSE8N8_KM9dg6ZPtul5nfDq6EAasEw&usqp=CAU" />
        </div>
        <div className="text-wrapper item">
          <span>iPhone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
