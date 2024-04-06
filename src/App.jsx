import { Footer } from "./Components/Footer";
import { Guitar } from "./Components/Guitar";
import { Header } from "./Components/Header";
import { useCart } from "./hooks/useCart";

function App() {
    const {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    } = useCart();

    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            ></Header>
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            addToCart={addToCart}
                        ></Guitar>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
