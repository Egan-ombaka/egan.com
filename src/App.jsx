import Github from "./components/Github"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MovingIcons from "./components/MovingIcons"
import Work from "./components/Work"

const icons = [
  {src: 'icons/react.svg', alt: 'React.JS'},
  {src: 'icons/icon2.svg', alt: 'Javascript'},
  {src: 'icons/icon3.svg', alt: 'Python'},
  {src: 'icons/icon4.svg', alt: 'React.JS'},
  {src: 'icons/icon5.svg', alt: 'React.JS'},
  {src: 'icons/icon6.svg', alt: 'React.JS'},
  {src: 'icons/icon7.svg', alt: 'React.JS'},
  {src: 'icons/linux.svg', alt: 'React.JS'},
  {src: 'icons/figma.svg', alt: 'React.JS'},
  {src: 'icons/docker.svg', alt: 'React.JS'},
]

function App() {
  return <div>
    <Header />
    <Hero />
    <Github />
    <Work />
    <MovingIcons icons={icons}/>
  </div>
}
export default App
