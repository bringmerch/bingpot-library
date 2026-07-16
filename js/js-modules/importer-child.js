import defaultExport from './i-am-module.js';
import whatever from './i-am-module.js'; // i-am-module.js의 default export인 defaultExport를 가리킨다.

import {useNamedExport1} from './i-am-module.js';

import {useNamedExport2} from './i-am-module.js';

import {useNamedExport3, useNamedExport4} from './i-am-module.js';

import {five, six} from './i-am-module.js';

import {alias} from './i-am-module.js';

export default function runImporterChild() {
    defaultExport();
    whatever();

    useNamedExport1();

    useNamedExport2();

    useNamedExport3();
    useNamedExport4();

    five();
    six();

    alias();
}

export function funnyName(value) {
    defaultExport(value);
    whatever(value);

    useNamedExport1(value);

    useNamedExport2(value);

    useNamedExport3(value);
    useNamedExport4(value);

    five(value);
    six(value);

    alias(value);
}
