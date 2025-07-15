import type { RouteRecordRaw } from "vue-router"
import type { Component, App } from "vue"

export interface LauncherOptions {
  /** @deprecated Set `routes` in router instead */
  routes?: RouteRecordRaw[]
  platform?: string
  name?: string
  customRoot?: Component | string
  appContainer?: Component
  beforeStart?: (app: App) => (Promise<void> | void)

}

export interface LauncherPluginRegistration<T = any> {
  name: string,
  options: any,
  install: (i, c, o) => void
  priority?: number
}