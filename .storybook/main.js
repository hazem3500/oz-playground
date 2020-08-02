module.exports = {
    stories: ['../src/**/*.stories.@(js|tsx|mdx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-docs',
        '@storybook/addon-knobs/register',
    ],
};
