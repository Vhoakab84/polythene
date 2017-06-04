import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.textfield;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-textfield', layout(config), color(config));