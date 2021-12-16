import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .png, .svg, .jpg
Try to make all your images roughly the same width, 
i.e. 320 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen

HI DPS

*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/screen1.png">
              <Button to="/page2" x="75" y="450" w="80" h="80" />
              <Button to="/page2" x="75" y="350" w="80" h="80" />
              <Button to="/page2" x="175" y="450" w="80" h="80" />
              <Button to="/page2" x="175" y="350" w="80" h="80" />
              <Button to="/page2" x="275" y="450" w="80" h="80" />
              <Button to="/page2" x="275" y="350" w="80" h="80" />
            </Screen>
          }
        />
        <Route
          path="/page2"
          element={
            <Screen image="/screen2.png">
              <Button to="/page3" x="15" y="230" w="300" h="50" />
              <Button to="/page3" x="15" y="330" w="300" h="50" />
              <Button to="/page3" x="15" y="430" w="300" h="50" />
            </Screen>
          }
        />
        <Route
          path="/page3"
          element={
            <Screen image="/screen3.png">
              <Button to="/page4" x="70" y="300" w="230" h="85" />
              <Button to="/page4" x="70" y="400" w="230" h="85" />
            </Screen>
          }
        />
        <Route
          path="/page4"
          element={
            <Screen image="/screen4.png">
              <Button to="/page5" x="220" y="265" w="70" h="75" />
            </Screen>
          }
        />
        <Route
          path="/page5"
          element={
            <Screen image="/screen5.png">
              <Button to="/page6" x="40" y="295" w="320" h="200" />
            </Screen>
          }
        />
        <Route
          path="/page6"
          element={
            <Screen image="/screen6.png">
              <Button to="/page7" x="50" y="205" w="300" h="350" />
            </Screen>
          }
        />
        <Route
          path="/page7"
          element={
            <Screen image="/screen7.png">
              <textarea
                style={{
                  position: "absolute",
                  top: "80px",
                  left: "70px",
                  width: "250px",
                  height: "150px",
                  backgroundColor: "transparent",
                  fontSize: "20px"
                }}
              />
              <Button to="/page8" x="70" y="290" w="250" h="80" />
              <Button to="/page8" x="70" y="405" w="250" h="80" />
            </Screen>
          }
        />
        <Route
          path="/page8"
          element={
            <Screen image="/screen8.png">
              <Button to="/" x="30" y="205" w="300" h="180" />
            </Screen>
          }
        />
        <Route
          path="/page9"
          element={
            <Screen image="/screen8.png">
              <Button to="/" x="30" y="205" w="300" h="180" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
