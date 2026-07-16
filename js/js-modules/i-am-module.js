export default function defaultExport(value) {
    console.log('defaultExport!!!' + ' value : ' + value);
}

export function useNamedExport1(value) {
    console.log('useNamedExport1!!!' + ' value : ' + value);
}

function useNamedExport2(value) {
    console.log('useNamedExport2!!!' + ' value : ' + value);
}

function useNamedExport3(value) {
    console.log('useNamedExport3!!!' + ' value : ' + value);
}

function useNamedExport4(value) {
    console.log('useNamedExport4!!!' + ' value : ' + value);
}

function useNamedExport5(value) {
    console.log('useNamedExport5!!!' + ' value : ' + value);
}

function useNamedExport6(value) {
    console.log('useNamedExport6!!!' + ' value : ' + value);
}

function useAliasExport(value) {
    console.log('useAliasExport!!!' + ' value : ' + value);
}

export {useNamedExport2};

export {useNamedExport3, useNamedExport4};

export {useNamedExport5 as five, useNamedExport6 as six};

export {useAliasExport as alias};
