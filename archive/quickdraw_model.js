// Minimal Quick, Draw! classifier demo for browser (TensorFlow.js must be loaded)
// This is a tiny demo model for a few categories, not the full dataset!
// For real use, replace with a proper model or load from tfhub.dev

// Example categories: cat, house, tree, bicycle, star
const CATEGORIES = ['cat', 'house', 'tree', 'bicycle', 'star'];

// Dummy weights for demo (random, not real model!)
// In practice, load a real model or use tf.loadLayersModel
function fakePredict(imageData) {
  // Return a random guess for demo
  const idx = Math.floor(Math.random() * CATEGORIES.length);
  const scores = Array(CATEGORIES.length).fill(0);
  scores[idx] = 1;
  return scores;
}

async function guessDrawing(canvas) {
  // In real use: preprocess canvas to 28x28 grayscale, normalize, run tf model
  // Here: just call fakePredict
  // ...
  const scores = fakePredict();
  const maxIdx = scores.indexOf(Math.max(...scores));
  return {
    label: CATEGORIES[maxIdx],
    confidence: (scores[maxIdx] * 100).toFixed(0)
  };
}

window.guessDrawing = guessDrawing;
