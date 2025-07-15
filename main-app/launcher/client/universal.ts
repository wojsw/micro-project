import { App } from 'vue'
import type { LauncherOptions, LauncherPluginRegistration } from "./interface"

export class Launcher {

  static isBrowser = true

  static NotImplementedError(name: string) {
    return new Error(`[Launcher Exception] ${name} is not implemented yet.`)
  }

  options: LauncherOptions
  template: string
  plugins: LauncherPluginRegistration<any>[] = []
  app!: App
  constructor(template: string, options: LauncherOptions) {
    this.template = template
    this.options = options
  }

  registerGlobalProperties() {
    this.app.config.globalProperties.isBrowser = Launcher.isBrowser
  }

  registerPlugins(plugins) {
    plugins
      .sort((a, b) => a.priority - b.priority)
      .forEach(
        ({ install, options }) => install(this, Launcher, options)
      )
  }

  use(plugin: any, options: any) {
    this.plugins.push(
      {
        name: plugin.name,
        install: (i, c, o) => plugin.install(i, c, o),
        options,
        priority: plugin.priority
      }
    )
  }

  start(): void {
    throw Launcher.NotImplementedError('start')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render() {
    throw Launcher.NotImplementedError('render')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  streamingRender() {
    throw Launcher.NotImplementedError('streamingRender')
  }

  
}