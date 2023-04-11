let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(3500)
  .typeString('Desarrollo sitios web')
  .pauseFor(200)
  .deleteChars(10)
  .start();