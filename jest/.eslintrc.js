module.exports = {
    extends: ['chop-chop/prettier'], // or 'chop-chop'
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: ['{*.,}{story,spec,test}.{tsx,ts,mdx}'],
            rules: {
                'import/no-default-export': 'off',
                'sonarjs/no-duplicate-string': 'off',
            },
        },
    ],
};
