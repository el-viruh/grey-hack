l=[
  {"Hello World":[0,0,0,0]},
  {"Hello World":[5,2,0,0]},
  {"Hello World":[1,3,30,0]},
  {"Hello World":[2,4,45,1]},
]
print f(l)

// Starting from left, going right:
//
// X Position
// Y Position
// Rotate
// Whole Word
//
// X, will move it horizontally
// Y, will move it vertically
// Rotate, will rotate it
// Whole Word, will decide whether you want to rotate the whole string or just the letters
//
// For personal preferences, I inverted the rotate value so negative values will go anti-clockwise instead
