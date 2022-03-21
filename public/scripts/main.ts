import { AddAbout } from './components/about.js'
import { AddProjects } from './components/projects.js'
import { sleep } from './tools/sleep.js'

await (async function main(): Promise<void> {
  AddAbout()

  await AddProjects()

  const fadeUps = document.getElementsByClassName("animated")

  for (const fadeUp of fadeUps) {
    await sleep(300)

    // @ts-ignore
    fadeUp['style']['animation-play-state'] = 'running'
    // @ts-ignore
    fadeUp['style']['-webkit-animation-play-state'] = 'running'
  }
})()

export {}