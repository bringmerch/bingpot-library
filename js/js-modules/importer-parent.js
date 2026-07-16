import withoutParam from './importer-child.js';
import {withParam} from './importer-child.js';

withoutParam();
console.log();
withParam("aye aye cap!");

// window.funnyName = funnyName; // 지양. 모듈왜씀