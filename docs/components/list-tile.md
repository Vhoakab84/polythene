# List Tile

Displays a list element as part of a [List](list.md).

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [List tile content options](#list-tile-content-options)
  - [List tile appearance options](#list-tile-appearance-options)
  - [List tile primary content options](#list-tile-primary-content-options)
  - [List tile secondary content options](#list-tile-secondary-content-options)
  - [Internally used options](#internally-used-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a name="main-features"></a>
## Main features

* Separately set primary, secondary and front content
* Hover state
* Selected state
* Customize ripple effect (center, opacity, speed, color)
* Compact display
* Set as sticky header
* Indent content


<a name="usage"></a>
## Usage

* [Usage with Mithril](mithril/list-tile.md)
* [Usage with React](react/list-tile.md)



<a name="options"></a>
## Options

<a name="list-tile-content-options"></a>
### List tile content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content**   | -              | -        |             | See below |
| **secondary** | optional       | Object   |             | Options for secondary content, see below |

<a name="list-tile-appearance-options"></a>
### List tile appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **header**    | optional       | Boolean  | false       | Set to `true` to make this a header tile |
| **indent** | optional | Boolean | | Set to `true` to indent the content |
| **selected** | optional | Boolean | false | Set to `true` to show a selected state |
| **highlight** | optional | Boolean | false | Set to `true` to show a highlight state; a selected state always has precedence over a highlight state |
| **disabled** | optional | Boolean | false | Set to `true` to deactivate the url and hover state (in case of [List](List.md) with setting `hoverable`) and show a disabled state |
| **ink** | optional | Boolean | false | Set to `true` to show a ripple effect when the tile is tapped |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [Ripple](ripple.md) options to define ripple behavior |
| **hoverable** | optional | Boolean | false | Set to true to show a hover effect (non-touch devices) |
| **selectable** | optional | Boolean | false | Set to true to show a mouse pointer (non-touch devices) |
| **sticky** | optional | Boolean | | Make list tile sticky when scrolling; this is normally set in the [List](list.md) component as `header.sticky`; [does not work in IE/Edge](http://caniuse.com/#feat=css-sticky) |
| **compact** | optional | Boolean | | Set to `true` to reduce vertical padding |

<a name="list-tile-primary-content-options"></a>
### List tile primary content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **content**      | optional | String, hyperscript or component | | Any primary content; replaces children and ignores `title`, `subTitle` and `highSubtitle` |
| **title**        | optional | String | | The text content |
| **subtitle**     | optional | String | | Secondary text content (1 line high) |
| **highSubtitle** | optional | String | | Secondary text content (2 lines high) |
| **subContent**   | optional | String, hyperscript or component | | Secondary content (no height restriction) |
| **front**        | optional | String, hyperscript or component |  | Content to show at the left of the primary content |
| **compactFront** | optional | Boolean | | Set to `true` to reduce horizontal width of `front` content |
| **url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) or `to` (for React Router) | | URL location; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |

<a name="list-tile-secondary-content-options"></a>
### List tile secondary content options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **secondary.element** | optional | String | See "Layout of secondary content" below | HTML element for secondary content |
| **secondary.icon** | optional | Object |  | [Icon](Icon.md) options object for icon in secondary content; will be placed above secondary.content |
| **secondary.url** | optional | Object with `href`, optionally `oncreate` (for Mithril) or `onClick` (for React) | | URL for secondary content; Mithril: for in-app route linking set `oncreate : m.route.link`; React: for in-app route linking use `onClick` and a router such as `react-router-dom` |
| **secondary.content** | optional | String, hyperscript or component | | Secondary content |


<a name="internally-used-options"></a>
### Internally used options

* `register`


<a name="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-list-tile` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **before** | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a name="composition"></a>
## Composition

List Tile is composed from:

* [Ripple](ripple.md) (when option `ink` is used)
* [Icon](icon.md) (when option `secondary.icon` is used)


<a name="css-classes"></a>
## CSS classes

* [List Tile classes](../../packages/polythene-css-classes/list-tile.js)

