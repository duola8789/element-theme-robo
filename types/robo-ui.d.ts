import Vue from 'vue';

import {RoboUIComponent} from './component';

/**
 * component common definition
 */
export type Component = RoboUIComponent;

export function install(vue: typeof Vue): void;

import {Robo403404} from './packages/403-404';

export class ErrorPage extends Robo403404 {}
