module.exports = {
    stories: ['../src/**/*.stories.(js|tsx|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-docs',
        '@storybook/addon-knobs/register',
    ],
};
