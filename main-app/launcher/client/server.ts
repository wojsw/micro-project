import { Launcher as Universal } from "./universal"
import type { LauncherOptions } from "./interface"

export class Launcher extends Universal {
  constructor(template: string, options: LauncherOptions) {
    super(template, options)

    this.use(pluginLogger, this.options.logger)
    this.use(pluginHttp, this.options.http)
    
  }
}