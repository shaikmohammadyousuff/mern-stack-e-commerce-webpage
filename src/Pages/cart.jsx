import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { DEC, INC, REMOVE } from "../Features/Cart/cartSlice";

export const Cart = () => {
  let cartData = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row gy-3">
        {cartData.length > 0 ? (
          <>
            {cartData.map((item) => (
              <div
                className="col-12 border rounded shadow-sm p-3 d-flex align-items-center"
                key={item.id}
              >
                {/* Image */}
                <div className="col-md-3 text-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </div>

                {/* Details */}
                <div className="col-md-9">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-1 text-muted">Price: ₹{item.price}</p>
                  <p className="mb-2">Rating: ⭐ {item.rating}</p>

                  {/* Quantity controls */}
                  <div className="d-flex align-items-center mb-2">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => dispatch(INC(item.id))}
                    >
                      +
                    </button>
                    <span className="fw-bold">{item.qty || 1}</span>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => dispatch(DEC(item.id))}
                    >
                      -
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => dispatch(REMOVE(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center">
            {/* <Loader /> */}
            <h2 className="mt-2">Your cart is empty...</h2>
          </div>
        )}
      </div>
    </div>
  );
};
