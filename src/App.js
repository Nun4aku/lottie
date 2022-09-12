
import React, {useState, useRef} from "react";
import Lottie from "lottie-react";
import animation from "./animation/INITIALIZE_1_HQ.json";
import './App.css';

function App() {

  const [go, setGo] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const lottieRef = useRef();


  return (
    <div className="App">

    <div className="parent">
      <div className="block">
          {
            go ? (
              <Lottie
                style={{ height: 200 }}
                lottieRef={lottieRef}
                animationData = {animation}
                autoplay = {true}
                loop= {true}
              />
            ) : (
              <>
                {
                  isLoaded ? (
                    <div>Загрузилось</div>
                  ) : (
                    <button
                      onClick={() => {
                        setGo(true)
                        setTimeout(() => {
                          
                          setGo(false);
                          lottieRef.current.pause()
                          setIsLoaded(true)
                        }, 3000);
                      }}
                  >
                      ТЫк
                  </button>
                  )
                }
              </>
              
            )
          }
      </div>
    </div>

    
    
    </div>
  );
}

export default App;


