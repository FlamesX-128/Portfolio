interface Project {
  description: string,
  forks_count: number,
  html_url: string,
  language: string,
  name: string,
  stargazers_count: number
}

async function FetchProjects(): Promise<Project[]> {
  try {
    const resp = await fetch('https://api.github.com/users/FlamesX-128/repos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    return (await resp.json()).sort(
      (a: any, b: any) => a.stargazers_count - b.stargazers_count
    ).reverse()

  } catch (err) {
    console.error(err)

    return []
  }
}

const ColorLanguage: {
  [key: string]: string
} = {
  'Go': '#00ADD8',
  'Sass': '#a53b70',
  'Shell': '#89e051',
  'TypeScript': '#2b7489',
  'Vue': '#41b883'
}

async function AddProjects(): Promise<void> {
  const element = document.getElementById('projects-container')!

  const projects = await FetchProjects(),
    size = projects.length


  for (let i = 0; (i < size && i < 10); i++) {
    const project = projects[i]

    if (project.stargazers_count < 5) continue

    element.innerHTML += `
      <div class="animated animatedFadeInUp fadeInUp container">
        <a href="${project.html_url}">
          <div class="about-project">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
          </div>

          <div class="project-stats">
            <div class="project-stat">
              <i class="fa-solid fa-circle" ${
                project.language in ColorLanguage
                  ? "style=\"color: " + ColorLanguage[project.language] + ";\""
                  : void 0
              }></i>
              <p>${project.language}</p>
            </div>

            <div class="project-stat">
              <i class="fa-solid fa-star"></i>
              <p>${project.stargazers_count}</p>
            </div>

            <div class="project-stat">
              <i class="fa-solid fa-code-branch"></i>
              <p>${project.forks_count}</p>
            </div>
          </div>
        </a>
      </div>
    `
  }
}

export { AddProjects }
