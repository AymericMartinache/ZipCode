//* --- COMPONENTS
import Footer from "../Footer/footer";
import Form from "../Form/form";
import Header from "../Header/header";
import Information from "../Informations/information";

//* --- SCSS
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Form />
            <Information />
            <Footer />
        </div>
    );
}

export default App;
