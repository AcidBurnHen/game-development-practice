# Game Development Practice Projects 

## Project 1 - Basic Sprite Animations 

- Learned how to use canvas to draw simple object and animate it
- Learned about sprite sheets
- Learned how to animate a sprite sheet 
    - Used drawImage() function
    - Created sprite sheet state variable for positioning 
    - Created the logic to run the animation based on the animation state variable X and Y coordinates
    - Created a selector for the user to select the animation row to play

## Project 2 - Parallax Backgrounds

- Learned the easiest way to create endlessly scrolling backgrounds
    - It was done by creating 2 same images that overlap each other 
- Learned how to make different layers move at different speed
    - By simply adding a game speed modifier into the calculation
- Learned how to make scroll speed dynamic to easily change it
    - Connected the range input element with the game speed variable

## Project 3 - Enemy Movement Patterns 

### - Enemy type 1 - Wiggling effect
    - Learned how to animate an enemy with a wiggly effect and keep it inside of canvas.
    - Using math.random() for dynamic random movement of each enemy 

### - Enemy type 2 - Endless Horizontal Movement with Vertical Sine Wave
    - Learned how to make a flying enemy with sine waving
        - The enemies move from right to left in canvas 
        - Learned about Javascript trigonometry methods Math.sin() and Math.cos()
        - Used Math.sin() to create to create a vertical sine wave for the enemies.

### - Enemey type 3 
    - Using math.sin() to vertically move enemies with the X axis
    - Using math.cos() on the Y axis to make the enemies move horizontally
    - Combining these two creates a circular movement for the enemies
    - Adjusting the curve calculation adds more space in the middle
    - If I change the horizontal speed  ```js  Math.PI/360```
        - I can make it so that the vertical movement does only 1 cycle
        - While the horizontal movement does 2 cycles as it's divided by 180
        - This will create U shaped horizontal wavy movements 
        - Depending on how the two values are changed this can result in all sorts of crazy movement patterns
        - I can think of pattern ideas by thinking of the divided number of the two values as the
        cycles of movements there will be for the smaller value axis inside 1 cycle of the higher value axis.
    