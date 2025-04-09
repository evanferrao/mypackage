import './App.css';
import Calculator from './Calculator';
import Counter from './Counter';
import FormExample from './FormExample';
import MegaCounter from './MegaCounter';
import ShoppingCart from './ShoppingCart';
import Stopwatch from './Stopwatch';
import Timer from './Timer'
import TodoList from './TodoList';
import ContactList from './ContactList';
import ProductCatalog from './ProductCatalog';
import ThemeSwitcher from './ThemeSwitcher';
import ProfileCard from './ProfileCard';
import TaskTracker from './TaskTracker';
import ProductReview from './ProductReview';
import SignupForm from './SignupForm';
import SurveyForm from './SurveyForm';
import DigitalClock from './DigitalClock';
import ColourPicker from './ColourPicker';
import Calendar from './Calendar';




function App() {

  const product = {
    name: 'Wireless Headphones',
    image: 'https://via.placeholder.com/400x200?text=Headphones',
    description: 'High quality wireless headphones with noise cancellation.'
  };

  return (
    <>
    <Timer/>
    <Stopwatch/>
    <Counter/>
    <MegaCounter/>  
    <ShoppingCart/>
    <TodoList/>
    <Calculator/>
    <FormExample/>
    <ContactList/>
    <ProductCatalog/>
    <ThemeSwitcher/>
    <ProfileCard name="Evan Ferrao" age={21} location="Mumbai, India"/>
    <TaskTracker/>
    <ProductReview product={product} />
    <SignupForm/>
    <SurveyForm/>
    <DigitalClock/>
    <ColourPicker/>
    <Calendar/>
    </>
  );
}

export default App;
