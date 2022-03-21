const skills: Array<string> = [
  'HTML', 'CSS', 'JavaScript', 'Node.js', 'Deno', 'TypeScript',
  'CoffeeScript', 'Sass', 'Elixir', 'Go', 'Rust', 'Vue', 'Vite', 'Nuxt',
  'JWT', 'Webpack', 'esbuild', 'MongoDB', 'PostgreSQL', 'Sqlite', 'Git',
  'Docker'
]

function AddAbout(): void {
  document.getElementById('about-section')!.innerHTML = `
    <div class="animated animatedFadeInUp fadeInUp container">
      <h2>About me</h2>
      <p>I'm 16 years old, I am a junior developer, temporarily focused on web development.</p>
    </div>
 
    <div class="animated animatedFadeInUp fadeInUp container">
      <h2>Skills</h2>
      <p>${ // @ts-ignore
        new Intl.ListFormat('en').format(skills)
      }</p>
    </div>
 
    <div class="animated animatedFadeInUp fadeInUp container">
      <h2>Social Networks</h2>
      <div>
        <a href="https://discord.gg/DPYXzgZQhN">
          <i class="fa-brands fa-discord fa-2xl"></i>
        </a>

        <a href="https://github.com/FlamesX-128">
          <i class="fa-brands fa-github fa-2xl"></i>
        </a>

        <a href="https://twitter.com/FlamesX_128">
          <i class="fa-brands fa-twitter fa-2xl"></i>
        </a>
      </div>
    </div>
  `
}

export { AddAbout }
