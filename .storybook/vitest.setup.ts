import { beforeAll } from 'vitest'
import { setProjectAnnotations } from '@storybook/angular'
import {  } from '@storybook/angular/renderer'
import * as addonActionsAnnotations from '@storybook/addon-actions/preview'
import * as addonTestAnnotations from '@storybook/experimental-addon-test/preview'
import '../src/stories/components'
import * as coreAnnotations from './core/preview'
import * as toolbarAnnotations from './addons/toolbars/preview'
import * as projectAnnotations from './preview'


const annotations = setProjectAnnotations([
  projectAnnotations,
  coreAnnotations,
  toolbarAnnotations,
  addonActionsAnnotations,
  addonTestAnnotations,

])

beforeAll(annotations.beforeAll)
